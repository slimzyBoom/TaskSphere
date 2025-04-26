<template>
    <div class="relative w-24 h-24">
      <!-- Circle Background -->
      <svg class="absolute inset-0" width="100%" height="100%" viewBox="0 0 120 120">
        <circle class="text-gray-200" stroke="currentColor" stroke-width="4" fill="transparent" r="50" cx="60" cy="60" />
      </svg>
  
      <!-- Progress Circle -->
      <svg class="absolute inset-0 rotate-[-90deg]" width="100%" height="100%" viewBox="0 0 120 120">
        <circle :stroke-dashoffset="strokeOffset" class="text-blue-500" stroke="currentColor" stroke-width="4" 
                fill="transparent" r="50" cx="60" cy="60" stroke-dasharray="314" stroke-linecap="round" />
      </svg>
  
      <!-- Centered Text -->
      <div class="absolute inset-0 flex items-center justify-center text-xl font-bold">
        {{ percentage }}%
      </div>
    </div>
  </template>
  
  <script setup>
  import { computed } from "vue";
  const props = defineProps({
    completedTasks: {
        type: Number,
        required: true,
        validator: (value) => value >= 0
    },
    totalTasks: {
        type: Number,
        required: true,
        validator: (value) => value > 0
    }
  })
  
  const percentage = computed(() => {
    return props.totalTasks > 0
      ? Math.round((props.completedTasks / props.totalTasks) * 100)
      : 0;
  });
  
  const strokeOffset = computed(() => {
    const circumference = 2 * Math.PI * 50; // 314 (full circle)
    return circumference * (1 - percentage.value / 100);
  });
  </script>
  