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
    <main>
      <MyTaskTab class="tab" v-if="activeTab === 'myProjects'" />
      <ProjectsTab class="tab" v-else />
    </main>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import CardContainer from "../components/CardContainer.vue";
import { ref } from "vue";
import ProjectsTab from "../components/ProjectsTab.vue";
import MyTaskTab from "../components/MyProjectsTab.vue";
export default {
  components: {
    Header,
    CardContainer,
    ProjectsTab,
    MyTaskTab,
  },

  setup() {
    const activeTab = ref("projects");

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

    return {
      headerProps,
      toggleTabs,
      activeTab,
    };
  },
};
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
