<template>
  <div class="right-side-bar">
    <DashboardCalendar/>
    <TodaysTask/>
    
  </div>
</template>

<script>
import DashboardCalendar from './DashboardCalendar.vue';
import TodaysTask from './TodaysTask.vue';

export default {
    components:{
        DashboardCalendar,
        TodaysTask,
    }
}
</script>

<style scoped>
    .right-side-bar{
        position: fixed;
        display: flex;
        flex-direction: column;
        gap: 40px;
        width: 23.4%;
        height: 100vh;
        background-color: var(--dark-gray-bg);
        right: 0;
        
        padding: 22px 15px;
    }
</style>