<template>
    <div class="my-task-tab">
      
          <CardContainer :containerData="myTask"/>
          <CardContainer :containerData="newTask"/>
  
      
    </div>
  </template>
  
  <script setup>
  import CardContainer from './CardContainer.vue';
  import { reactive, watch } from 'vue'
    
    const props = defineProps({
        data: { type: Array, required: true },
        loading: { type: Boolean, default: false }
    })

    // make them reactive objects
    const myTask = reactive({ title : 'My Task', cards: props.data, dateMessage: 'Starts' })
    const newTask   = reactive({ title: 'New Task', cards: props.data, dateMessage: 'Starts' })

    // sync them with props.data whenever it arrives or changes
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