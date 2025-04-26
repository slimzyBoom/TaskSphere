<template>
  <div
    class="flex bg-slate-800 text-white p-5 rounded-xl w-full lg:w-1/3 flex-row lg:flex-col lg:gap-7 justify-between"
  >
    <div class="flex flex-col justify-between lg:gap-4">
      <h3>Running Task</h3>
      <h1 class="text-5xl lg:text-3xl">
        {{ projectStore.uncompletedProjects }}
      </h1>
    </div>
    <div class="flex gap-5 items-center">
      <RadialProgress
        :completed-tasks="projectStore.completedProjects"
        :total-tasks="projectStore.totalProjects"
      />
      <div class="total-task flex flex-col text-left gap-2">
        <h2 class="text-2xl">{{ projectStore.totalProjects }}</h2>
        <p class="text-sm text-gray-400">
          {{ projectStore.totalProjects > 1 ? "Tasks" : "Task" }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import RadialProgress from "./RadialProgress.vue";
import { useProjectStore } from "../stores/projects";
const projectStore = useProjectStore();
</script>
