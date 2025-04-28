<template>
  <div class="create-project">
    <main>
      <form class="create-project-container" @submit.prevent="handleSubmit">
        <div class="title">
          <h2>Create Project</h2>
        </div>

        <div class="cont">
          <h3>Project Name</h3>
          <input type="text" placeholder="Name of your project" v-model="project.name" />
        </div>

        <div class="cont">
          <h3>Project Description</h3>
          <textarea placeholder="Describe your project" v-model="project.description"></textarea>
        </div>

        <div class="cont">
          <h3>Timeline</h3>
          <div class="mt-4 flex flex-col gap-4">
            <h5>Start date</h5>
            <input type="date" v-model="project.start_date" />
            <h5>End date</h5>
            <input type="date" v-model="project.end_date" />
          </div>
        </div>

        <div class="cont">
          <h3>Image</h3>
          <input type="file" @change="handleImage" />
        </div>

        <div class="flex flex-col gap-4">
          <h3>Project Ownership</h3>
          <label class="flex gap-2 items-center">
            <input type="radio" name="owner" value="personal" v-model="collaborationStatus" />
            <span>Personal</span>
          </label>
          <label class="flex gap-2 items-center">
            <input type="radio" name="owner" value="collaboration" v-model="collaborationStatus" />
            <span>Collaboration</span>
          </label>
        </div>

        <input type="submit" :value="loading ? 'Submitting...': 'Save Project'" :disabled="!isFormValid" />
      </form>

      <popUp
        v-if="isActive && content"
        :content="content"
        :success="success"
        @close="isActive = false"
      />
    </main>
  </div>
</template>

<script setup>
import { ref, reactive, watch, computed } from "vue";
import popUp from "@/components/popUp.vue";
import { createProject } from "@/services/projects.service";
import { useUserStore } from "@/stores/user";
import { useToast } from "vue-toastification";

const toast = useToast();

const userStore = useUserStore();

const isActive = ref(false);
const content = ref("");
const success = ref(false);
const collaborationStatus = ref("personal");
const loading = ref(false)

const project = reactive({
  admin_id: localStorage.getItem('userId') ,
  name: "",
  description: "",
  image: null,
  start_date: "",
  end_date: "",
  status: "personal", // default
});

// Watch collaborationStatus and update project.status
watch(collaborationStatus, (newStatus) => {
  project.status = newStatus;
});

const handleImage = (e) => {
  project.image = e.target.files[0];
};

const validate = () => {
  if (!project.name || !project.description || !project.start_date) {
    content.value = "Project name, description, and start date are required.";
    isActive.value = true;
    success.value = false;
    return false;
  }
  return true;
};

const isFormValid = computed(() => {
  return project.name && project.description && project.start_date;
});


const handleSubmit = async () => {
  if (!validate()) return;
  loading.value = true
  try {
    console.log(project)
    const data = await createProject(project);
    content.value = "Project saved! You can go to the projects page to edit and start.";
    success.value = true;
    isActive.value = true;
    // toast.success("Project saved! You can edit it on the Projects page.");
  } catch (error) {
    console.error(error.message);
    content.value =
      error.response?.data?.message ||
      "An unexpected error occurred. Please try again.";
    success.value = false;
    isActive.value = true;
    // toast.error(error.message || "An unexpected error occurred.");
  }finally{
    loading.value = false

  }
};
</script>


<style scoped>
.create-project {
  min-height: 100vh;
  width: 100%;
  background-color: var(--light-gray-bg);
}

.create-project main {
  display: flex;
  flex-direction: column;
  padding: 30px;
}

.create-project main .create-project-container {
  display: flex;
  flex-direction: column;
  gap: 30px;
  background-color: var(--white);
  position: relative;
  padding: 30px;
  border-radius: 10px;
  min-height: 650px;
}

.create-project main .create-project-container .title {
  display: flex;
  justify-content: center;
  font-size: 25px;
  font-weight: 600;
}

.create-project main .create-project-container .cont {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.create-project main .create-project-container .cont h3 {
  /* font-size: 14px; */
  font-weight: 600;
}

.create-project main .create-project-container .cont input,
.create-project main .create-project-container .cont textarea {
  border: 1.2px solid var(--dark-gray-bg);
  border-radius: 10px;
  padding: 10px;
}

.create-project main .create-project-container .cont textarea {
  height: 120px;
}

.create-project main .create-project-container .cont .image-box {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ccc;
  font-size: 20px;
  height: 200px;
  border: 1px dashed rgba(212, 211, 211, 0.919);
  border-radius: 10px;
}

.create-project main .create-project-container .cont .image-box svg {
  border-radius: 50%;
  background-color: var(--light-gray-bg);
  padding: 10px 12px;
  cursor: pointer;
}

.create-project main .create-project-container input[type="submit"] {
  position: relative;
  padding: 12px;
  color: var(--white);
  background-color: var(--light-blue);
  top: 100%;
  margin-top: 20px;
  font-size: 16px;
  font-weight: 500;
  border-radius: 10px;
  cursor: pointer;
}

.create-project main .create-project-container input:disabled{
  background-color: #BAC8FF
}

</style>

