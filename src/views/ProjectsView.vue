<template>
  <div class="projects">
    <Header :headerProps="headerProps"></Header>
    <div class="tabs-links">
      <span
        :class="{ active: activeTab === 'projects' }"
        @click="toggleTabs('projects')"
      >
        Projects
      </span>
      <span
        :class="{ active: activeTab === 'myProjects' }"
        @click="toggleTabs('myProjects')"
      >
        My Projects
      </span>
    </div>
    <!-- <div class="" > -->
      <Spinner v-if="loading" :occupiedHeight="'214px'"/>
    <!-- </div> -->
    <main v-else>
      <ProjectsTab class="tab" v-if="activeTab === 'projects'"  :loading="loading" :data="allProjects"/>
      <MyTaskTab class="tab" v-else-if="activeTab == 'myProjects'" :loading="loading" :data="allProjects"/>
    </main>
  </div>
</template>

<script setup>
import Header from "../components/Header.vue";
import CardContainer from "../components/CardContainer.vue";
import { ref, onMounted } from "vue";
import ProjectsTab from "../components/ProjectsTab.vue";
import MyTaskTab from "../components/MyProjectsTab.vue";
import { getAllProjects } from "@/services/projects.service";
import Spinner from "@/components/Spinner.vue";

    const activeTab = ref('projects');
    const allProjects = ref([])
    const adminProjects = ref([])
    const loading = ref(true)
    const error = ref(null)

    const headerProps = {
      title: "Explore Projects",
      titleText: null,
      search: true,
      filter: true,
      icons: true,
      button: true,
    };

    function toggleTabs(tab) {
      activeTab.value = tab;
      
    }

  const handleGetProjects = async () =>{
    try {
      loading.value = true
      const response = await getAllProjects()
      const data = response.data
      error.value = (null)

      if (data) {
        allProjects.value = data.all_projects || []
        adminProjects.value = data.adminProjects || []
      }
      // toggleTabs('projects')
      loading.value  = false
      
      
    } catch (err) {
      
      error.value = "Failed to load projects. Please try again."
      console.log(error.value);
      throw err
      
    }
  }

  onMounted(()=>{
    handleGetProjects()
  });

</script>

<style scoped>
.projects {
  position: relative;
  width: 100%;
  min-height: 100vh;
  background-color: var(--light-gray-bg);
}

.projects .tabs-links {
  display: flex;
  /* gap: 20px; */
}

.projects .tabs-links span {
  font-size: 17px;
  font-weight: 500;
  padding: 10px 30px;
  cursor: pointer;
  transition: 0.3s ease;
}

.projects .tabs-links span.active {
  background-color: #fff;
}
</style>
