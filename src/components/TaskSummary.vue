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
        <h2 class="text-2xl">{{ projectStore.totalTasks }}</h2>
        <p class="text-sm text-gray-400">Task</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import RadialProgress from "./RadialProgress.vue";
import { useProjectStore } from "../stores/projects";
const projectStore = useProjectStore();
</script>

<!-- <style scoped>
    .box{
        display: flex;
        flex-direction: column;
        width: 204px;
        height: 214px;
        border-radius: 10px;
        background-color: var(--black);
        padding: 20px 20px;
        color: var(--white);
        
    }

    .box h3{
        color: var(--white);
    }

    .box h1{
        font-size: 32px;
        font-weight: 600;
        padding: 20px 0;
    }

    .box .cont:nth-child(2){
        display: flex;
        gap: 38px;
        align-items: center;
    }

    .box .progress-circle{        
        width: 68px;
        height: 68px;
        border-radius: 50%;
        background: conic-gradient(var(--light-blue) var(--progress), #546eff23 0%);
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        

    }

    .box .progress-circle::before {
        content: '';
        width: 92%;
        height: 92%;
        border-radius: 50%;
        background-color: var(--black);
        position: absolute;
        font-size: 18px;
    }

   
    .box .cont p{
        color: var(--gray-text-secondary);
    }

    .box .cont h2{
        font-size: 20px;
        font-weight: 600;
    }

    .box .progress-circle h2{
        z-index: 2;
        font-size: 18px;
        font-weight: 400;
    }



</style> -->
