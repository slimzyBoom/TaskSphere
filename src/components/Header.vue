<template>
  <header class="header bg-white lg:bg-gray-50 max-vsm:!px-[20px]">
    <div class="cont">
      <div class="title hidden lg:block">
        <WelcomeMessage :headerProps="headerProps" />
      </div>
      <div
        class="w-12 h-12 flex items-center justify-center cursor-pointer lg:hidden border border-slate-300 rounded-full"
        @click="toggleDropDown"
      >
        <font-awesome-icon
          :icon="['fas', 'bars']"
          class="text-xl text-slate-500 max-vsm:!text-[16px]"
        />
      </div>
      <div class="icons" v-if="headerProps.icons">
        <router-link
          to="create-project"
          v-if="headerProps.button"
          class="button"
        >
          <font-awesome-icon icon="plus"></font-awesome-icon>
        </router-link>
        <div class="notification">
          <router-link to="notifications">
            <font-awesome-icon :icon="['far', 'bell']"></font-awesome-icon>
          </router-link>
        </div>
        <div class="profile-img">
          <router-link to="/profile">
            <img :src="userStore.user?.image || images.profileOne" alt="" />
          </router-link>
        </div>
      </div>
    </div>
    <div class="block md:hidden" v-if="headerProps.filter">
      <WelcomeMessage :headerProps="headerProps" />
    </div>
    <div
      class="flex justify-between"
      v-if="headerProps.filter && headerProps.search"
    >
      <SearchBar></SearchBar>
      <FilterTab></FilterTab>
    </div>

    <!-- Drop Down Button -->
    <div
      class="fixed inset-0 backdrop-blur h-screen z-10"
      v-if="isOpen"
      @click="toggleDropDown"
    ></div>
    <!-- Dropdown Menu -->
    <section class="left-0 container absolute z-20 top-6 px-4" v-if="isOpen">
      <div class="bg-slate-100 p-4 rounded-md flex flex-col gap-4">
        <div
          class="active:border-2 active:border-blue-500 h-12 w-12 flex items-center justify-center self-start cursor-pointer"
          @click="toggleDropDown"
        >
          <font-awesome-icon :icon="['fas', 'x']" class="text-lg" />
        </div>
        <nav>
          <ul class="flex flex-col gap-3">
            <li>
              <router-link
                :to="{ name: 'dashboard' }"
                class="text-center block w-full p-2 rounded-md hover:bg-blue-200"
                >Overview</router-link
              >
            </li>
            <li>
              <router-link
                :to="{ name: 'projects' }"
                class="text-center block w-full p-2 rounded-md hover:bg-blue-200"
                >Project</router-link
              >
            </li>
            <li>
              <router-link
                :to="{ name: 'calendar' }"
                class="text-center block w-full p-2 rounded-md hover:bg-blue-200"
                >Calendar</router-link
              >
            </li>
            <li>
              <router-link
                :to="{ name: 'settings' }"
                class="text-center block w-full p-2 rounded-md hover:bg-blue-200"
                >Settings</router-link
              >
            </li>
          </ul>
        </nav>
      </div>
    </section>
  </header>
</template>

<script setup>
import { images } from "../assets/assets";
import { ref } from "vue";
import FilterTab from "./FilterTab.vue";
import SearchBar from "./SearchBar.vue";
import WelcomeMessage from "./WelcomeMessage.vue";
import { useUserStore } from "@/stores/user";
const userStore = useUserStore();
defineProps(["headerProps"]);
const isOpen = ref(false);

const toggleDropDown = () => {
  isOpen.value = !isOpen.value;
};
</script>

<style scoped>
header {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  /* background: var(--white); */
  padding: 25px 30px;
  padding-top: 32px;
}

header .cont {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header .profile-img {
  width: 50px;
  height: 50px;
}

header .profile-img img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

header .icons {
  display: flex;
  align-items: center;
  gap: 15px;
}

/* header .icons .button{
        display: flex;
        color: var(--white);
        background-color: var(--light-blue);
        padding: 10px 20px;
        border-radius: 10px;
        align-items: center;
        gap: 10px;
    } */

header .icons svg {
  font-size: 20px;
  border: 1px solid #eaeaec;
  padding: 10px 12px;
  border-radius: 50%;
  color: var(--gray-text-secondary);
}
</style>
