<template>
  <div
    class="flex bg-slate-800 text-white p-5 rounded-xl w-full lg:w-1/3 flex-row lg:flex-col lg:gap-7 justify-between"
  >
    <div class="flex flex-col justify-between lg:gap-4">
      <h3>Running Task</h3>
      <h1 class="text-5xl lg:text-3xl">
        {{ summary.total }}
      </h1>
    </div>
    <div class="flex gap-5 items-center">
      <RadialProgress
        :completed-tasks="summary.completed"
        :total-tasks="summary.total"
      />
      <div class="total-task flex flex-col text-left gap-2">
        <h2 class="text-2xl">{{ summary.not_done }}</h2>
        <p class="text-sm text-gray-400">
          {{ summary.not_done > 1 ? "Tasks" : "Task" }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
  import RadialProgress from "./RadialProgress.vue";
  import { useProjectStore } from "../stores/projects";
  import { onMounted, ref } from "vue";
  import { getTaskSummary } from "@/services/dashboard.service";
  const projectStore = useProjectStore();

  const summary = ref([])

  const fetchSummaryData = async ()=>{
    try {
      const response = await getTaskSummary()
      summary.value = response

      console.log(response);
      
    } catch (error) {
      console.log(error)
    }
  }

  onMounted(async () => {
    fetchSummaryData()
  });
</script>
