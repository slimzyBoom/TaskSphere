<template>
  <div
    class="bg-blue-500 text-white p-3 rounded-lg flex justify-center items-center"
    @click="handleLogout"
  >
    <router-link :to="{ name: 'login' }" class="flex gap-2 items-center">
      <font-awesome-icon :icon="['fas', 'right-from-bracket']" />
      <span>Logout</span>
    </router-link>
  </div>
</template>

<script setup>
import { useUserStore } from '@/stores/user';
import { useRouter } from 'vue-router';
const router = useRouter();
const user_store = useUserStore();

const handleLogout = () => {
  user_store.logoutUser();
  router.push({ name: 'login' });
};

</script>