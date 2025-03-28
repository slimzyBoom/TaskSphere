<template>
  <main class="h-screen flex items-center px-2">
    <section class="rounded-md shadow-md p-4 py-6 w-full md:w-1/3 mx-auto">
      <h1 class="text-center text-2xl font-semibold">Reset Password</h1>
      <form class="flex flex-col gap-4 mt-4" @submit.prevent="handlesubmit">
        <input
          :type="inputType"
          id="password"
          v-model="password"
          placeholder="Password"
          class="rounded-md border border-gray-300 p-2 focus:border-black"
        />
        <input
          :type="inputType"
          id="confirmPassword"
          v-model="confirm_password"
          placeholder="Confirm Password"
          class="rounded-md border border-gray-300 p-2 focus:border-black"
        />
        <div class="flex gap-2">
          <input
            type="checkbox"
            id="showPassword"
            @change="handleShowPassword"
          />
          <label for="showPassword">Show Password</label>
        </div>
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
import { resetPasswordService } from "@/services/user.auth.service";
import popUp from "@/components/popUp.vue";
const inputType = ref("password");
const password = ref("");
const confirm_password = ref("");
const isActive = ref(false);
const success = ref(false);
const content = ref("");

const handleShowPassword = () => {
  inputType.value = inputType.value === "password" ? "text" : "password";
};

const handlesubmit = async () => {
  try {
    if (password.value !== confirm_password.value) {
      content.value = "Passwords do not match";
      isActive.value = true;
      success.value = false;
      timeout();
      return;
    }
    const data = await resetPasswordService(password.value);
    if (data.errors) {
      content.value = data.errors.email;
      isActive.value = true;
      success.value = false;
      return;
    }
    content.value = data.message;
    success.value = true;
    isActive.value = true;
    email.value = "";
  } catch (error) {
    console.error(error.message);
    content.value =
      error.response?.data?.message ||
      "An unexpected error occurred. Please try again.";
    isActive.value = true;
    success.value = false;
  }
};
</script>
