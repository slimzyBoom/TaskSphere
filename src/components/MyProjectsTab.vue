<template>
    <div class="my-task-tab max-vsm:!px-[20px]">
        <GridCardContainer :containerData="myTask" :loading="loading"/>
        
        <!-- <CardContainer :containerData="myTask"/> -->
        <!-- <CardContainer :containerData="newTask" :loading="loading"/> -->
  
      
    </div>
  </template>
  
  <script setup>
  import CardContainer from './CardContainer.vue';
  import GridCardContainer from './GridCardContainer.vue';
  import { reactive, watch } from 'vue'
    
    const props = defineProps({
        data: { type: Array, required: true },
        loading: { type: Boolean, default: false }
    })

    const myTask = reactive({ title : 'My Task', cards: props.data, dateMessage: 'Starts' })
    const newTask   = reactive({ title: 'New Task', cards: props.data, dateMessage: 'Starts' })

    watch(
    () => props.data,
    (list) => {
        myTask.cards = list
        newTask.cards   = list
    },
    { immediate: true }
    )
  


  </script>
  
  <style scoped>
     .my-task-tab{
        display: flex;
        flex-direction: column;
        gap: 50px;
        padding: 35px 30px;

    }
  </style>