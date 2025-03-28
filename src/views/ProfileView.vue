<template>
  <div class="profile">
    <main class="w-full px-5 md:px-5 p-10">
      <div class="profile-container">
        <div class="image">
          <img :src="images.profileOne" alt="" />
          <router-link :to="{ name: 'update-profile' }">
            Edit profile
            <font-awesome-icon icon="pencil"></font-awesome-icon>
          </router-link>
        </div>
        <div class="info">
          <div class="info-container">
            <div class="cont">
              <label>Name</label>
              <p>{{ userStore.user.username }}</p>
            </div>
            <div class="cont">
              <label>Email</label>
              <p>{{ userStore.user.email }}</p>
            </div>
            <div class="cont">
              <label>Phone Number</label>
              <p v-if="userStore.user.name">{{ userStore.user.phone }}</p>
              <p v-else class="text-sm">No number setup</p>
            </div>
            <div class="cont">
              <label></label>
              <div class="gender">
                <span
                  :class="{ active: gender === 'male' }"
                  @click="() => (gender = 'male')"
                  >Male</span
                >
                <span
                  :class="{ active: gender === 'female' }"
                  @click="() => (gender = 'female')"
                  >Female</span
                >
              </div>
            </div>
          </div>
        </div>
        <button
          class="flex gap-2 justify-center items-center font-medium text-white rounded-md bg-blue-500 w-full cursor-pointer md:w-1/5 mt-5 py-2"
        >
          <font-awesome-icon :icon="['fas', 'right-from-bracket']" /> Logout
        </button>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { images } from "../assets/assets";
import { useUserStore } from "@/stores/user";
const userStore = useUserStore();
const gender = ref("male");
</script>

<style scoped>
.profile {
  position: relative;
  width: 100%;
  min-height: 100vh;
  background-color: var(--light-gray-bg);
}
/* 
.profile main {
  width: 100%;
  padding: 40px;
} */

.profile main .profile-container {
  position: relative;
  width: 100%;
  min-height: 530px;
  background-color: var(--white);
  border-radius: 10px;
  padding: 32px;
  /* padding-top: 80px; */
}

.profile main .profile-container .image {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  /* position: absolute;
        top: -60px;
        left: 48%; */
}

.profile main .profile-container .image img {
  width: 110px;
  height: 110px;
  border-radius: 50%;
  border: 4px solid var(--black);
}

.profile main .profile-container .image a {
  color: var(--light-blue);
  text-decoration: underline;
}

.profile main .profile-container .info .info-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 10px;
}

.profile main .profile-container .info .cont label {
  font-weight: 500;
  font-size: 16px;
}

.profile main .profile-container .info .cont .gender {
  display: flex;
  gap: 10px;
}

.profile main .profile-container .info .cont .gender span {
  display: flex;
  align-items: center;
  width: 150px;
  padding: 10px;
  border: 1px solid #ccc;
  position: relative;
  cursor: pointer;
  transition: 0.2s ease;
}

.profile main .profile-container .info .cont .gender span::before {
  content: "";
  position: absolute;
  width: 20px;
  height: 20px;
  border: 1px solid #ccc;
  border-radius: 50%;
  left: calc(100% - 30px);
  transition: 0.2s ease;
}

.profile main .profile-container .info .cont .gender span.active {
  border: 1px solid var(--light-blue);
}

.profile main .profile-container .info .cont .gender span.active::before {
  border: 3px solid var(--light-blue);
}
</style>
