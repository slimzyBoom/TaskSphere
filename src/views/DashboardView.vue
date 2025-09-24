<template>
  <div class="relative flex flex-col lg:flex-row w-full min-h-screen">
    <div
      class="relative w-full lg:w-[70%] xl:w-[72.2%] bg-gray-50 overflow-hidden"
    >
      <Header :headerProps="headerProps"></Header>

      <section class="px-[36px] max-vsm:!px-[20px] mt-5 block lg:hidden">
        <WelcomeMessage :headerProps="headerProps"></WelcomeMessage>
      </section>
      <div  v-if="loading" class="relative min-h-[80vh]  max-lg:pt-[87px] lg:min-h-[90vh] ">
        <Spinner :occupiedHeight="'214px'"/>

      </div>
      <main v-else class="flex flex-col gap-[50px] max-vsm:!px-[20px] py-[35px] px-[30px]">
        <div class="flex flex-col lg:flex-row gap-[25px] items-center">
          <TaskSummary></TaskSummary>
          <ActivityGraph></ActivityGraph>
        </div>
        <CardContainer :containerData="newTask" :loading="loading"/>
        <CardContainer :containerData="upcomingDeadline" :loading="loading"/>
        <CardContainer :containerData="completedTask" :loading="loading"/>

      </main>
      <div v-if="!loading && modalIndicator == true && inviteLink" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-40">
        <div class="bg-white rounded-lg p-6 max-w-md max-tny:p-4">
            <div class="mb-6 text-center">
                <span class="font-semibold max-tny:text-[15px] md:text-lg">You’ve Been Invited to Join a Project</span> 
                <p class="mt-2 max-tny:text-sm">
                    You’ve been added as a collaborator on the project <i class="font-medium"> {{inviteProjectName}}</i>.  Accept to access the workspace.
                </p>
                </div>
            <div class="flex justify-end gap-4">
                <button
                    @click="modalIndicator = false"
                    class="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors text-sm"
                >
                    Cancel
                </button>
                <button
                    @click="acceptInvite"
                    :class="`px-4 py-2 text-white rounded-lg transition-colors text-sm ${
                                acceptingInvite
                                ? 'bg-red-300 cursor-not-allowed'
                                : 'bg-red-600 hover:bg-red-700'
                            }`"            
                    :disabled="acceptingInvite"
                >
            
                    <span v-if="acceptingInvite" class="flex items-center justify-center ">
                        <svg class="animate-spin h-5 w-5 mr-2 text-white" viewBox="0 0 24 24">
                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Accepting...
                    </span>
                    <span v-else>Accept Invite</span>
                </button>
            </div>
        </div>
      </div>
    </div>

    <RightSideBar></RightSideBar>
    <popUp
      v-if="isActive && content"
      :content="content"
      :success="success"
      @close="isActive = false"
    />
  </div>
</template>

<script setup>
import ActivityGraph from "../components/ActivityGraph.vue";
import Header from "../components/Header.vue";
import TaskSummary from "../components/TaskSummary.vue";
import CardContainer from "../components/CardContainer.vue";
import RightSideBar from "../components/RightSideBar.vue";
import WelcomeMessage from "../components/WelcomeMessage.vue";
import { useUserStore } from "@/stores/user";
import {ref, onMounted } from "vue";
import { getUpcomingProjects, getDeadlineProjects } from "@/services/dashboard.service";
import Spinner from "@/components/Spinner.vue";
import { useRoute } from "vue-router";
import { getProjectService } from "@/services/projects.service";
import { addCollaborator } from "@/services/collaborators.service";

const userStore = useUserStore();
const route = useRoute();


const formatDateMessage = (date, label = '') => {
  if (!date) return '—'

  const target = new Date(date)
  const now = new Date()
  const distance = formatDistanceToNow(target, { addSuffix: true })

  if (label) {
    if (target > now) return `${label} in ${formatDistanceToNow(target)}`
    else return `${label} ${distance}`
  }

  return distance
}


const loading = ref(true)
const error = ref(null)
const isActive = ref(false);
const content = ref("");
const success = ref(false);
const modalIndicator = ref(false)
const inviteLink  = ref('')
const inviteUrl  = ref('')
const expires = ref('')
const signature = ref('')
const inviteProjectName = ref('')
const ongoingProjects = ref([])
const nearingDeadlineProjects = ref([])
const upcomingProjects = ref([])
const completedProjects = ref([])
const acceptingInvite = ref(false)

const userName = userStore.user?.username || "User";
const headerProps = {
  title: `Hi ${userName}`,
  titleText: "Let's finish your task today !",
  search: false,
  filter: false,
  icons: true,
  button: true,
};
const upcomingDeadline = {
  title: "Upcoming Deadline",
  cards: nearingDeadlineProjects,
  dateMessage: "End",
};

const newTask = {
  title: "New Projects",
  cards: upcomingProjects,
  dateMessage: "Starts",
};

const completedTask = {
  title: "Completed Projects",
  cards: completedProjects,
  dateMessage: "End",
};


const handleGetUpcomingProjects = async () =>{
  try {
    loading.value = true
    const response = await getUpcomingProjects()
    const data = response.data
    error.value = (null)

    if (data) {
      upcomingProjects.value = data || []
    }
    
    
  } catch (err) {
    
    error.value = "Failed to load dashboard. Please try again."
    console.log(error.value);
     throw err
    
  }finally{
    loading.value  = false
  }
}


const handleGetDeadlineProjects = async () =>{
  try {
    loading.value = true
    const response = await getDeadlineProjects()
    const data = response.data
    error.value = (null)

    if (data) {
      nearingDeadlineProjects.value = data || []
    }
    
    
  } catch (err) {
    
    error.value = "Failed to load dashboard. Please try again."
    console.log(error.value);
     throw err
    
  }finally{
    loading.value  = false
  }
}

const checkInviteLink = async() =>{
  const encodedLink = route.query.inviteLink;
  modalIndicator.value = route.query.modalIndicator === 'true';
  if (!encodedLink || !modalIndicator) return;

  inviteLink.value = decodeURIComponent(encodedLink);
  
  const [path, queryString] = inviteLink.value.split('?');
  
  const queryParams = new URLSearchParams(queryString);
  const projectId = inviteLink.value.split("projects/")[1].split("/")[0]
  inviteUrl.value = inviteLink.value.split("?")[0].split("v1")[1]
  expires.value = queryParams.get('expires');
  signature.value = queryParams.get('signature');

  console.log('inviteLink:', inviteLink.value);
  console.log('projectId:', inviteUrl.value);
  

  try {
    const response = await getProjectService(projectId)
    inviteProjectName.value = response.data.name;
    
  } catch (error) {
    throw new error
  }


  console.log('invite Link:', inviteLink.value);
  console.log('projectId:', projectId);
  
}

const acceptInvite = async()=>{
  try {
    acceptingInvite.value = true
    const response = await addCollaborator(inviteUrl.value)
    content.value = "Welcome to the Team!";
    success.value = true;
    isActive.value = true;
    
  } catch (err) {
    error.value = "Failed to accept invite. Please try again."
    console.log(error.value);
    content.value = err.message || error.value;
    success.value = false;
    isActive.value = true;
    
  }finally{
    acceptingInvite.value  = false
  }
}

onMounted(()=>{
  checkInviteLink()
  userStore.getUser()
  handleGetUpcomingProjects()
  handleGetDeadlineProjects()
});
</script>
