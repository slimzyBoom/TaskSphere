<template>
    <div class="dashboard-calendar">
    <div class="title">
        <p @click="prevWeek" class="arrows">&lt;</p>
        <p>{{ currentMonth }} {{ currentYear }}</p>
        <p @click="nextWeek" class="arrows">&gt;</p>
    </div>
   <router-link to="calendar">
      <div class="content">
        <div v-for="(day, index) in currentWeek" :key="index" class="cont" :class="{'active':day.active}">
          <p>{{day.dayName}}</p>
          <span>{{day.dayNumber}}</span>
        </div>
     </div>
    </router-link>

  </div>
  
  
</template>

<script>
import dayjs from 'dayjs'
import { ref, computed } from 'vue';
export default {

    setup(){
        const today = dayjs(); // Get current date
        const currentMonth = today.format('MMMM'); // Get current month 
        const currentYear = today.format('YYYY'); // Get current year 
        const startOfMonth = today.startOf('month'); // First day of month
        const endOfMonth = today.endOf('month'); // Last day of month

        const currentDate = ref(today);
        const startWeek = ref(currentDate.value.startOf('week')); // First week of the month

        const currentWeek = computed(() => {
            return Array.from({ length: 7 }).map((_, i) => {
                const day = startWeek.value.add(i, 'day');
                return {
                    dayName: day.format('dddd').charAt(0),
                    dayNumber: day.date(),
                    month: day.month(),
                    active: dayjs().isSame(day, 'day')
                };
            });
        });

        const isFirstWeek = computed(() => startWeek.value.isSame(startOfMonth.startOf('week'), 'day'));
        const isLastWeek = computed(() => startWeek.value.add(7, 'day').isAfter(endOfMonth, 'day'));

         // Move to the previous week
    function prevWeek() {
      if (!isFirstWeek.value) {
        startWeek.value = startWeek.value.subtract(7, 'day');
      }
    }



    // Move to the next week
    function nextWeek() {
      if (!isLastWeek.value) {
        startWeek.value = startWeek.value.add(7, 'day');
      }
    }

    return { currentWeek, prevWeek, nextWeek, isFirstWeek, isLastWeek, currentMonth, currentYear};

        
    }

}
</script>

<style scoped>
    .dashboard-calendar{
        display: flex;
        height: 150px;
        flex-direction: column;
        background-color: var(--white);
        border-radius: 10px;
        padding: 16px;
        gap: 25px;
        justify-content: space-between;
    }

    .dashboard-calendar .title{
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 14px;
        font-weight: 600;
    }

    .dashboard-calendar .title .arrows{
        cursor: pointer;
        font-weight: 200;
        font-size: 20px;
    }

    .dashboard-calendar .content{
        display: flex;
        justify-content: space-between;
        font-size: 11px;
        
    }

    .dashboard-calendar .content .cont{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        gap: 12px;
    }

    .dashboard-calendar .content span{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 26px;
        width: 26px;
        background-color: var(--dark-gray-bg);
        /* padding: 5px 7px; */
        border-radius: 50%;
    }

    .dashboard-calendar .active{
        background-color: var(--black);
        border-radius: 30px;
        padding: 4px;
        color: var(--white);
        gap: 6px !important;
    }

    .dashboard-calendar .active span{
        background-color: var(--light-blue) ;
    }

</style>
