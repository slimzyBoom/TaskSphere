<template>
  <div class="relative flex flex-col lg:flex-row w-full min-h-screen">
    <div
      class="relative w-full lg:w-[70%] xl:w-[72.2%] bg-gray-50 overflow-hidden"
    >
      <Header :headerProps="headerProps"></Header>

      <section class="px-[36px] mt-5 block lg:hidden">
        <WelcomeMessage :headerProps="headerProps"></WelcomeMessage>
      </section>
      <main class="flex flex-col gap-[50px] py-[35px] px-[30px]">
        <div class="flex flex-col lg:flex-row gap-[25px] items-center">
          <TaskSummary class="flex-1"></TaskSummary>
          <ActivityGraph></ActivityGraph>
        </div>
        <CardContainer :containerData="upcomingDeadline" />
        <CardContainer :containerData="newTask" />
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
import { onMounted } from "vue";
const userStore = useUserStore();

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
  cardLimit: 10,
};

const newTask = {
  title: "New Task",
  cardLimit: 10,
};
onMounted(userStore.getUser);
</script>
