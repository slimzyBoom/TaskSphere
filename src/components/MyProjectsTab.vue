<template>
    <div class="my-task-tab">
      
          <CardContainer :containerData="timeLimit"/>
          <CardContainer :containerData="newTask"/>
  
      
    </div>
  </template>
  
  <script>
  import CardContainer from './CardContainer.vue';
  export default {
      components: {
          CardContainer
      },
  
      setup(){
          const timeLimit = {
              title : 'Time Limit mytask',
              cardLimit : 10,
          }
          
          const newTask = {
              title : 'New Task',
              cardLimit : 10,
          }
  
          return{
              newTask,
              timeLimit,
          }
      }
  }
  </script>
  
  <style scoped>
     .my-task-tab{
        display: flex;
        flex-direction: column;
        gap: 50px;
        padding: 35px 30px;

    }
  </style>