<template>
  <div class="projects-tab">
    
        <CardContainer :containerData="timeLimit" :loading="loading"/>
        <CardContainer :containerData="newTask" :loading="loading"/>

    
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
            title : 'Time Limit',
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
    .projects-tab{
        display: flex;
        flex-direction: column;
        gap: 50px;
        padding: 35px 30px;
    }
</style>