<template>
  <div class="calendar-grid">
    <div class="header">
        <font-awesome-icon icon="chevron-left" @click="prevMonth"></font-awesome-icon>
        <h1>{{ currentMonthYear }}</h1>
        <font-awesome-icon icon="chevron-right" @click="nextMonth"></font-awesome-icon>
    </div>
    <div class="box">
        <div class="day-header">
            <h3 v-for="(day, index) in daysOfWeek" :key="'day-' + index">
                {{ day }}
            </h3>
      
        </div>    
        <div class="calendar-days">
            <div
                v-for="date in calendarDays"
                :key="'date-' + date.date"
                :class="['calendar-day', { 'current-day': date.isToday, 'has-event': date.hasEvent }]"
                @click="selectDate(date.date)"
            >
                <span v-if="date.day">
                    {{ date.day }}
                </span>
                <div class="event-popup" v-if="date.day">
                    <p class="no-event" v-if="!date.hasEvent">No events on this date</p>
                    <div v-else class="event-popup-text" :style="{'--color': date.event[0].color}">
                        <h3>{{date.event[0].title}}</h3>
                        <p>{{ date.event[0].description }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    props:['currentMonthYear','daysOfWeek', 'calendarDays', 'nextMonth', 'prevMonth',]

}
</script>

<style scoped>
    .calendar-grid{
        width: 100%;
        min-height: 558px;
        background-color: var(--white);
        border-radius: 10px;
        padding: 40px;
    }

    .calendar-grid .header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 40px;
        font-weight: 600;
        /* font-size: 20px; */
    }

    .calendar-grid .header svg{
        cursor: pointer;
    }

    .calendar-grid .box{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 30px;

    }

    .calendar-grid .box .day-header{
        width: 100%;
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        justify-content: space-between;
        gap: 20px;
        
    }

    .calendar-grid .box .day-header h3{
        display: flex;
        justify-content: center;
    }

    .calendar-grid .box .calendar-days{
        width: 100%;
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        justify-content: space-between;
        gap: 20px;
        row-gap: 30px;

    }

    .calendar-grid .box .calendar-days .calendar-day{
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
       
    }

    .calendar-grid .box .calendar-days .calendar-day span{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 35px;
        height: 35px;
        border-radius: 50%;
        font-size: 14px;
        background-color: var(--light-gray-bg);
        cursor: pointer;
    }

    .calendar-grid .box .calendar-days .calendar-day.has-event span{
        background-color: var(--light-blue);
        color: var(--white);
    }

    .calendar-grid .box .calendar-days .calendar-day .event-popup{
        position: absolute;
        width: 220px;
        top: 40px;
        /* left: 75px; */
        display: none;
        background-color: var(--white);
        z-index: 1;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 
                0 1px 3px rgba(0, 0, 0, 0.06);
        padding: 10px;
        border-radius: 10px;
    }

    .calendar-grid .box .calendar-days .calendar-day:hover .event-popup{
        display: flex;
        /* position: relative; */
    }

    .calendar-grid .box .calendar-days .calendar-day .event-popup-text::before{
        content: '';
        position: absolute;
        height: calc( 100% - 20px);
        width: 5px;
        background-color: var(--color);
        border-radius: 10px;
    }

    .calendar-grid .box .calendar-days .calendar-day .no-event{
        font-size: 14px;
        font-weight: 500;
        color: var(--gray-text-primary);
        text-align: center;
        margin-left: 20px;
    }

    .calendar-grid .box .calendar-days .calendar-day .event-popup-text h3{
        font-size: 15px;
        font-weight: 500;
        margin-left: 12px;
    }

    .calendar-grid .box .calendar-days .calendar-day .event-popup-text p{
        font-size: 12px;
        margin-left: 12px;
        color: var(--gray-text-primary);
    }

    @media (max-width: 768px) {
  .calendar-grid {
    padding: 20px;
  }

  .calendar-grid .header h1 {
    font-size: 18px;
  }

  .calendar-grid .box .day-header,
  .calendar-grid .box .calendar-days {
    gap: 10px;
    row-gap: 20px;
  }

  .calendar-grid .box .calendar-days .calendar-day span {
    width: 28px;
    height: 28px;
    font-size: 12px;
  }

  .calendar-grid .box .calendar-days .calendar-day .event-popup {
    width: 180px;
    top: 35px;
    padding: 8px;
  }

  .calendar-grid .box .calendar-days .calendar-day .event-popup-text h3 {
    font-size: 13px;
  }

  .calendar-grid .box .calendar-days .calendar-day .event-popup-text p {
    font-size: 11px;
  }

  .calendar-grid .box .calendar-days .calendar-day .no-event {
    font-size: 12px;
  }
}

@media (max-width: 480px) {
  .calendar-grid {
    padding: 10px;
  }

  .calendar-grid .header h1 {
    font-size: 16px;
  }

  .calendar-grid .box .calendar-days .calendar-day span {
    width: 24px;
    height: 24px;
    font-size: 11px;
  }

  .calendar-grid .box .calendar-days {
    gap: 6px;
    row-gap: 15px;
  }

  .calendar-grid .box .day-header h3 {
    font-size: 12px;
  }
}

</style>