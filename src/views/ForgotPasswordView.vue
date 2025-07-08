<template>
  <main class="h-screen flex items-center px-2">
    <section class="rounded-md shadow-md p-4 py-6 w-full md:w-1/3 mx-auto">
      <h1 class="text-center text-2xl font-semibold">Forgot Password</h1>
      <form class="flex flex-col gap-4 mt-4" @submit.prevent="handlesubmit">
        <input
          type="email"
          id="email"
          v-model="email"
          placeholder="Email"
          class="rounded-md border border-gray-300 p-2 focus:border-black"
        />
        <button type="submit" class="bg-blue-500 text-white rounded-md p-2">
          Submit
        </button>
      </form>
    </section>

    <popUp
      v-if="isActive && content"
      :content="content"
      :success="success"
      @close="isActive = false"
    />
  </main>
</template>

<script setup>
import { ref } from "vue";
import { forgotPasswordService } from "@/services/user.auth.service";
import { useRouter } from "vue-router";
import popUp from "@/components/popUp.vue";
const router = useRouter();
const email = ref("");
const isActive = ref(false);
const success = ref(false);
const content = ref("");

const handlesubmit = async () => {
  try {
    const data = await forgotPasswordService(email.value);
    if (data.errors) {
      content.value = data.errors.email;
      isActive.value = true;
      success.value = false;
      timeout();
      return;
    }
    email.value = "";
    // router.push({ name: "reset-password" });  
  } catch (error) {
    console.error(error.message);
    content.value =
      error.response?.data?.message ||
      "An unexpected error occurred. Please try again.";
    isActive.value = true;
    success.value = false;
    timeout();
  }
};

const timeout = () => {
  setTimeout(() => {
    isActive.value = false;
  }, 5000);
};
</script>
