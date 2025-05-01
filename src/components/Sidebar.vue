<template>
  <div
    class="fixed lg:flex flex-col top-0 left-0 h-screen py-8 pb-4 px-5 justify-between w-[232px] z-10 hidden"
  >
    <li class="flex flex-col gap-10">
      <router-link :to="{ name: 'dashboard' }"> <Logo /> </router-link>

      <div class="flex gap-3 flex-col">
        <router-link
          :to="{ name: 'dashboard' }"
          :class="[
            'flex gap-2.5 p-2 rounded-md',
            { 'bg-slate-100': $route.name === 'dashboard' },
          ]"
        >
          <img :src="images.overviewIcon" alt="" />
          <span>Overview</span>
        </router-link>
        <router-link
          :to="{ name: 'projects' }"
          :class="[
            'flex gap-2.5 p-2 rounded-md',
            { 'bg-slate-100': $route.name === 'projects' || $route.name ===  'create-project' || $route.name ==  'project-details' },
          ]"
        >
          <img :src="images.projectIcon" alt="" />
          <span>Projects</span>
        </router-link>
        <router-link
          :to="{ name: 'calendar' }"
          :class="[
            'flex gap-3 p-2 rounded-md',
            { 'bg-slate-100': $route.name === 'calendar' },
          ]"
        >
          <font-awesome-icon
            :icon="['far', 'calendar-days']"
            class="text-xl text-slate-400"
          />
          <span>Calendar</span>
        </router-link>
        <router-link
          :to="{ name: 'settings' }"
          :class="[
            'flex gap-2.5 p-2 rounded-md',
            { 'bg-slate-100': $route.name === 'settings' },
          ]"
        >
          <img :src="images.settingsIcon" alt="" />
          <span>Settings </span>
        </router-link>
      </div>
    </li>

    <div class="flex flex-col gap-4">
      <div
        class="bg-slate-900 text-white p-3 lg:h-48 xl:h-56 justify-center items-center flex flex-col gap-4 rounded-lg relative"
      >
        <span
          class="w-8 h-8 rounded-full absolute -top-4 bg-neutral-900 flex justify-center items-center font-bold ring-2 shadow-md shadow-white ring-white text-lg"
          >?</span
        >
        <div class="text-center flex flex-col gap-2 flex-1 mt-8">
          <h2 class="">Help Center</h2>
          <p class="text-sm">
            Having Trouble in Learning. Please contact us for more questions.
          </p>
        </div>
        <button
          class="flex justify-center gap-2 w-full py-1.5 bg-white rounded-lg text-sm font-semibold text-black"
        >
          Go To Help Center
        </button>
      </div>
      <logoutButton />
    </div>
  </div>
</template>

<script>
import { images } from "../assets/assets";
import Logo from "./Logo.vue";
import logoutButton from "./logoutButton.vue";
export default {
  components: { Logo, logoutButton },
  setup() {
    return {
      images,
    };
  },
};
</script>

<style scoped>
.side-bar {
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  width: 232px;
  padding: 30px 20px;
  padding-bottom: 23px;
  background-color: var(--white);
  z-index: 3;
}

.side-bar li {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.side-bar li a {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 20px;
  border-radius: 10px;
  transition: 0.3s ease;
}

.side-bar li a:hover,
.side-bar li a.active {
  background-color: var(--light-gray-bg);
}

.side-bar li a.active img {
  filter: brightness(0) saturate(100%) invert(5%) sepia(7%) saturate(5515%)
    hue-rotate(199deg) brightness(92%) contrast(91%);
}

.side-bar li a svg {
  color: var(--gray-text-secondary);
  font-size: 22px;
}

.side-bar li a span {
  color: var(--gray-text-secondary);
  font-size: 14px;
  font-weight: 500;
}

.side-bar li a.active span,
.side-bar li a.active svg {
  color: #141522;
}

.side-bar .help-center .container {
  position: relative;
  width: 192px;
  display: flex;
  flex-direction: column;
  background-color: #141522;
  border-radius: 10px;
  padding: 20px 15px;
  padding-top: 40px;
  overflow: hidden;
}

.side-bar .help-center .container::before {
  content: "";
  position: absolute;
  width: 160px;
  height: 160px;
  background-color: #ffffff14;
  border-radius: 50%;
  top: -46%;
  left: -46%;
}

.side-bar .help-center {
  position: relative;
}

.side-bar .help-center .container::after {
  content: "";
  position: absolute;
  width: 160px;
  height: 160px;
  background-color: #ffffff14;
  border-radius: 50%;
  bottom: -46%;
  right: -46%;
}

.side-bar .question-mark {
  position: absolute;
  display: flex;
  left: 42%;
  top: -20px;
  align-items: center;
  justify-content: center;
  color: var(--white);
  height: 40px;
  width: 40px;
  font-size: 25px;
  font-weight: 600;
  background-color: #141522;
  border-radius: 50%;
  border: 2px solid var(--white);
  backdrop-filter: blur(24px);
  box-shadow: 0 4px 15px rgba(63, 63, 63, 0.638),
    /* Focused shadow at the top */ 0 8px 20px rgba(0, 0, 0, 0.263);
  z-index: 1;
}

.side-bar .help-center .container .text {
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: center;
  color: var(--white);
}

.side-bar .help-center .container .text h2 {
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.02em;
}

.side-bar .help-center .container .text p {
  font-size: 12px;
}

.side-bar .help-center .container .btn {
  background-color: var(--white);
  border-radius: 10px;
  font-size: 12px;
  padding: 10px 0;
  margin-top: 20px;
  font-weight: 500;
}
</style>
