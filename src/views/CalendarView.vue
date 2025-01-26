<template>
  <div class="calendar">
    <Header :header-props="headerProps"></Header>
    <main class="content">
        <CalendarGrid :currentMonthYear="currentMonthYear" :daysOfWeek="daysOfWeek" :calendarDays="calendarDays" :prevMonth="prevMonth" :nextMonth="nextMonth"></CalendarGrid>
        <!-- <CalendarEvents/> -->
    </main>
    
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import CalendarEvents from '../components/CalendarEvents.vue';
import CalendarGrid from '../components/CalendarGrid.vue';
import dayjs from 'dayjs';
import { computed, ref } from 'vue';

export default {
    components:{
        CalendarGrid,
        CalendarEvents,
        Header,
    },

    setup(){
        const currentDate = ref(dayjs());
        const events = ref([])

        const headerProps = {
            title :  'Calendar & Events',
            titleText: null,
            search : false,
            filter: false,
            icons: true,
            button: false,
        }

        events.value = [
            {
                id: 1,
                title: "Meeting", // Category
                date: "2025-02-05",
                task: "Discuss project timeline", // Task related to the event
                participants: ["John Doe", "Jane Smith"], // Collaborators
                importance: "high", // Importance level
                description: "", // Will be generated dynamically
                color: "" // Color based on importance
            },
            {
                id: 2,
                title: "Workshop",
                date: "2025-02-07",
                task: "Vue.js basics training",
                participants: ["Sarah Connor", "Mike Ross"],
                importance: "medium",
                description: "",
                color: ""
            },
            {
                id: 3,
                title: "Deadline",
                date: "2025-02-10",
                task: "Submit Q1 financial report",
                participants: ["Jane Smith"],
                importance: "high",
                description: "",
                color: ""
            },
            {
                id: 4,
                title: "Birthday",
                date: "2025-02-20",
                task: "Celebrate Mike's birthday",
                participants: ["Everyone in the team"],
                importance: "low",
                description: "",
                color: ""
            }
        ];

        const importanceColors = {
            high: "#be1d1d", // Red for high importance
            medium: "#FFD93D", // Yellow for medium importance
            low: "#6BCB77" // Green for low importance
        };

        // Generate descriptions and colors for events
        events.value.forEach(event => {
            // Generate description dynamically
            event.description = `${event.title} to ${event.task}, scheduled by ${
                event.participants.length > 1 ? event.participants.join(", ") : event.participants[0]
            }.`;

            // Assign color based on importance
            event.color = importanceColors[event.importance];
        });

        const currentMonthYear = computed(() => currentDate.value.format("MMMM YYYY"));

        const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

        const calendarDays = computed(() => {
            const startOfMonth = currentDate.value.startOf("month");
            const endOfMonth = currentDate.value.endOf("month");

            const startDay = startOfMonth.day();
            const daysInMonth = endOfMonth.date();

            const days = [];
            // Empty slots for previous month's days
            for (let i = 0; i < startDay; i++) {
                days.push({ day: "", date: null, isToday: false, hasEvent: false });
            }
            // Current month's days
            for (let day = 1; day <= daysInMonth; day++) {
                const date = startOfMonth.date(day);
                days.push({
                    day,
                    date: date.format("YYYY-MM-DD"),
                    isToday: date.isSame(dayjs(), "day"),
                    hasEvent: events.value.some(event => event.date === date.format("YYYY-MM-DD")),
                    event: events.value.filter(event => event.date === date.format("YYYY-MM-DD")),
                });
            }
            return days;
        });

        const upcomingEvents = computed(() =>
        events.value
            .filter(event => dayjs(event.date).isAfter(dayjs()))
            .sort((a, b) => dayjs(a.date) - dayjs(b.date))
        );

        const prevMonth = () => {
            currentDate.value = currentDate.value.subtract(1, "month");
        };

        const nextMonth = () => {
            currentDate.value = currentDate.value.add(1, "month");
        };

        const selectDate = date => {
            if (date) alert(`You selected: ${date}`);
        };

        return {
            currentDate,
            currentMonthYear,
            daysOfWeek,
            calendarDays,
            upcomingEvents,
            headerProps,
            prevMonth,
            nextMonth,
            selectDate
        };
    }
    

}
</script>

<style scoped>
    .calendar{
        min-height: 100vh;
        width: 100%;
        background-color: var(--light-gray-bg) ;

    }

    .calendar main{
        display: flex;
        flex-direction: column;
        gap: 30px;
        padding: 30px;

    }
</style>