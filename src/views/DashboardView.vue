<template>
  <div class="relative flex flex-col lg:flex-row w-full min-h-screen">
    <div
      class="relative w-full lg:w-[70%] xl:w-[72.2%] bg-gray-50 overflow-hidden"
    >
      <Header :headerProps="headerProps"></Header>

      <section class="px-[36px] max-vsm:!px-[20px] mt-5 block lg:hidden">
        <WelcomeMessage :headerProps="headerProps"></WelcomeMessage>
      </section>
      <div  v-if="loading" class="relative min-h-[80vh]  max-lg:pt-[87px] lg:min-h-[90vh] ">
        <Spinner :occupiedHeight="'214px'"/>

      </div>
      <main v-else class="flex flex-col gap-[50px] max-vsm:!px-[20px] py-[35px] px-[30px]">
        <div class="flex flex-col lg:flex-row gap-[25px] items-center">
          <TaskSummary></TaskSummary>
          <ActivityGraph></ActivityGraph>
        </div>
        <CardContainer :containerData="newTask" :loading="loading"/>
        <CardContainer :containerData="upcomingDeadline" :loading="loading"/>

      </main>
    </div>

    <RightSideBar></RightSideBar>
  </div>
</template>

<script setup>
import ActivityGraph from "../components/ActivityGraph.vue";
import Header from "../components/Header.vue";
import TaskSummary from "../components/TaskSummary.vue";
import CardContainer from "../components/CardContainer.vue";
import RightSideBar from "../components/RightSideBar.vue";
import WelcomeMessage from "../components/WelcomeMessage.vue";
import { useUserStore } from "@/stores/user";
import {ref, onMounted } from "vue";
import { getDashboard } from "@/services/dashboard.service";
import Spinner from "@/components/Spinner.vue";
const userStore = useUserStore();

const formatDateMessage = (date, label = '') => {
  if (!date) return '—'

  const target = new Date(date)
  const now = new Date()
  const distance = formatDistanceToNow(target, { addSuffix: true })

  if (label) {
    if (target > now) return `${label} in ${formatDistanceToNow(target)}`
    else return `${label} ${distance}`
  }

  return distance
}

const loading = ref(true)
const error = ref(null)
const ongoingProjects = ref([])
const nearingDeadlineProjects = ref([])
const upcomingProjects = ref([])
const completedProjects = ref([])

const userName = userStore.user?.username || "User";
const headerProps = {
  title: `Hi ${userName}`,
  titleText: "Let's finish your task today !",
  search: false,
  filter: false,
  icons: true,
  button: true,
};
const upcomingDeadline = {
  title: "Upcoming Deadline",
  cards: nearingDeadlineProjects,
  dateMessage: "Ends",
};

const newTask = {
  title: "New Task",
  cards: upcomingProjects,
  dateMessage: "Starts",
};

const handleGetDashboard = async () =>{
  try {
    loading.value = true
    const response = await getDashboard()
    const data = response.data
    error.value = (null)

    if (data) {
      ongoingProjects.value = data.ongoing || []
      upcomingProjects.value = data.upcoming || []
      nearingDeadlineProjects.value = data.nearing_deadline || []
      completedProjects.value = data.completed || []
    }
    
    
  } catch (err) {
    
    error.value = "Failed to load dashboard. Please try again."
    console.log(error.value);
     throw err
    
  }finally{
    loading.value  = false
  }
}

onMounted(()=>{
  userStore.getUser()
  handleGetDashboard()
});
</script>
