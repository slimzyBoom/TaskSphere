<template>
  <div class="static lg:fixed flex flex-col gap-[40px] w-full lg:w-[23.4%] lg:h-screen bg-gray-200 right-0 top-0 py-[32px] px-[15px] z-10">
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
    /* .right-side-bar{
        position: fixed;
        display: flex;
        flex-direction: column;
        gap: 40px;
        width: 23.4%;
        height: 100vh;
        background-color: var(--dark-gray-bg);
        right: 0;
        
        padding: 22px 15px;
        padding-top: 32px;
    } */
</style>