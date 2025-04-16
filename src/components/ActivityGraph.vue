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
use([CanvasRenderer, LineChart, GridComponent, TooltipComponent]);
import { ref, computed, watch } from "vue";
import { groupBy } from "lodash";
import { useProjectStore } from "@/stores/projects";

const projectStore = useProjectStore();
const tasks = projectStore.projects;
const completedTasks = ref({});

// Watch for changes in tasks and update completedTasks
watch(
  tasks,
  (newTasks) => {
    const completed = newTasks.filter((task) => task.completed);
    completedTasks.value = groupBy(completed, (task) =>
      new Date(task.completionDate).getDay()
    );
  },
  { deep: true }
);

// Computed property to update chart data
const chartData = computed(() => {
  const days = ["S", "M", "T", "W", "T", "F", "S"];
  return days.map((_, index) => completedTasks.value[index]?.length || 0);
});

const chartOptions = ref({
  tooltip: {
    trigger: "axis",
    backgroundColor: "black",
    borderColor: "#ddd",
    borderWidth: 1,
    textStyle: { color: "white", fontSize: 12 },
    formatter: (params) => {
      let value = params[0].value; // Get value from first dataset
      return `<div style="text-align: center;">Task: ${value}</div>`;
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
    data: ["S", "M", "T", "W", "T", "F", "S"],
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
});
</script>
