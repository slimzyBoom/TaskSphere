<template>
  <div
    class="p-4 bg-gray-100 rounded-xl mx-auto shadow-md mt-4 w-full lg:w-2/3"
  >
    <div class="flex justify-between items-center mb-2">
      <span class="text-sm font-medium">Activity</span>
      <span class="text-sm text-gray-600 flex gap-3 items-center"
        >This week <font-awesome-icon :icon="['fas', 'chevron-down']" />
      </span>
    </div>
    <div
      class="relative w-full rounded-2xl bg-white h-44 sm:h-32 md:h-36 lg:h-44"
    >
      <!--  -->
      <v-chart :option="chartOptions" class="w-full h-full" autoresize />
    </div>
  </div>
</template>

<script setup>
import { use } from "echarts/core";
import { LineChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";
import { GridComponent, TooltipComponent } from "echarts/components";
import VChart from "vue-echarts";
import { ref, computed, onMounted } from "vue";
import { getChartData } from "@/services/dashboard.service";
use([CanvasRenderer, LineChart, GridComponent, TooltipComponent]);

// Store the raw API data
const weeklyData = ref({
  Monday: 0,
  Tuesday: 0,
  Wednesday: 0,
  Thursday: 0,
  Friday: 0,
  Saturday: 0,
  Sunday: 0,
});

const fetchChartData = async ()=>{
  try {
    const response = await getChartData()
    weeklyData.value = response.weekly_task_completion

  } catch (error) {
    console.log(error)
  }
}

// You can fetch this from an API onMounted
onMounted(async () => {
  fetchChartData()
});

// Order data for chart
const daysOrder = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const chartData = computed(() => daysOrder.map(day => weeklyData.value[day] || 0));

// Make chartOptions reactive
const chartOptions = computed(() => ({
  tooltip: {
    trigger: "axis",
    backgroundColor: "black",
    borderColor: "#ddd",
    borderWidth: 1,
    textStyle: { color: "white", fontSize: 12 },
    formatter: (params) => {
      const value = params[0].value;
      return `<div style="text-align: center;">Tasks: ${value}</div>`;
    },
  },
  grid: {
    left: "5%",
    right: "5%",
    top: "10%",
    bottom: "10%",
    containLabel: true,
  },
  xAxis: {
    type: "category",
    data: daysOrder.map(day => day[0]), // First letter (S, M, T, etc.)
    axisLine: { show: false },
    boundaryGap: true,
    axisTick: { show: false },
    splitLine: { show: true, lineStyle: { color: "#ddd" } },
  },
  yAxis: {
    type: "value",
    min: 0,
    max: 6,
    interval: 1,
    splitLine: { show: false },
    axisLine: { show: false },
    axisTick: { show: false },
    axisLabel: { margin: 12, formatter: (value) => Math.round(value) },
  },
  series: [
    {
      name: "Activity",
      type: "line",
      smooth: true,
      data: chartData.value,
      lineStyle: { color: "black", width: 2 },
      symbol: "circle",
      symbolSize: 7,
      itemStyle: {
        color: "white",
        borderColor: "blue",
        borderWidth: 2,
        borderType: "solid",
        backgroundColor: "white",
      },
    },
  ],
}));
</script>

