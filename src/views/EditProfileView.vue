<template>
  <div class="p-5 md:p-10 bg-gray-50 min-h-screen">
    <h2 class="text-lg font-semibold mb-4">Edit Profile</h2>

    <form @submit.prevent="updateProfile">
      <!-- Image Upload -->
      <div class="mb-4">
        <label class="block font-medium">Profile Picture</label>
        <input
          type="file"
          @change="handleFileUpload"
          accept="image/*"
          class="mt-2 w-full md:w-72"
        />
        <div v-if="previewImage" class="mt-2">
          <img :src="previewImage" class="w-24 h-24 rounded-2xl object-cover" />
        </div>
      </div>

      <!-- Other Profile Fields -->
      <div class="mb-4">
        <label class="block font-medium">Username</label>
        <input
          type="text"
          v-model="profile.name"
          class="w-full md:w-72 border bg-white p-2 rounded-md focus:border-blue-500"
          :placeholder="userStore.user.username || 'Enter username'"
        />
      </div>

      <div class="mb-4">
        <label class="block font-medium">Phone Number</label>
        <input
          type="text"
          v-model="profile.phone"
          class="w-full md:w-72 border p-2 rounded-md focus:border-blue-500"
          :placeholder="userStore.user.phone || 'Enter number'"
        />
      </div>

      <div class="mb-4">
        <label class="block font-medium">Email</label>
        <input
          type="email"
          v-model="profile.email"
          class="w-full md:w-72 border p-2 rounded-md focus:border-blue-500"
          :placeholder="userStore.user.email || 'Enter email'"
        />
      </div>

      <button
        type="submit"
        class="bg-blue-500 text-white px-4 py-2 rounded-md w-full md:w-auto"
      >
        Update Profile
      </button>
    </form>
    <popUp
      v-if="isActive && content"
      :content="content"
      :success="success"
      @close="isActive = false"
    />
  </div>
</template>

<script setup>
import { onMounted, reactive, ref } from "vue";
import popUp from "@/components/popUp.vue";
import { updateUserProfileService } from "@/services/user.auth.service";
import { useUserStore } from "@/stores/user";
import { getUser } from "@/services/user.service";
const userStore = useUserStore();
const success = ref(false);
const isActive = ref(false);
const content = ref("");
const userId = localStorage.getItem('userId')

const profile = reactive({
  name: "",
  email: "",
  phone: "",
  image: null,

});

const user = ref({})

const previewImage = ref(null);

const handleFileUpload = (event) => {
  const file = event.target.files[0];
  if (file) {
    profile.image = file;
    previewImage.value = URL.createObjectURL(file);
  }
};

const fetchUser = async () =>{
  try {
      const response = await getUser(userId)

      user.value = response.data

      profile.name = response.data.username
      profile.email = response.data.email
      profile.phone = response.data.phone
      // profile.image = response.data.image

      console.log(profile);
    
  } catch (error) {
      console.error(error);
  }
}

const updateProfile = async () => {
    console.log('went on');

  const formData = new FormData();
  formData.append("_method", "PUT");
  if (profile.name) formData.append("username", profile.name);
  else formData.append("username", user.username);
  if (profile.phone) formData.append("phone", profile.phone);
  if (profile.image) formData.append("image", profile.image);
  if (profile.email) formData.append("email", profile.email);
  else formData.append("email", user.email);
  try {
    const data = await updateUserProfileService(userId, formData);
    console.log('went on');
    
    if (data) {
      userStore.setUser(data);

      profile.name = "";
      profile.email = "";
      profile.phone = "";
      profile.image = null;
      previewImage.value = null;

      content.value = "Profile updated successfully";
      isActive.value = true;
      success.value = true;
    }
  } catch (error) {
    console.error(error);
    content.value =
      error.message || "An unexpected error occurred. Please try again.";
    isActive.value = true;
    success.value = false;
  }
};


onMounted(()=>{
  fetchUser()
})
</script>
