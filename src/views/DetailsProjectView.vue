<template>
  <div  v-if="loading" class="relative w-full min-h-[100vh]">
    <Spinner :occupiedHeight="'-10%'"/>

  </div>
  <div v-else class="project-details flex flex-col lg:flex-row max-tny:!p-[20px]">
    <div class="project-details-container w-full lg:w-[70%] max-tny:!p-[20px]">
      <div class="image max-vsm:!h-[280px] max-tny:!h-[240px]">
        <img :src="images.taskImageTwo" alt="" />
      </div>
      <div class="text">
        <div class="flex flex-col ">
          <h1 className="max-vsm:!text-2xl  max-tny:!text-xl">{{project.name}}</h1>
          <div class="flex gap-1 items-center !text-[#54577A]">
            <font-awesome-icon :icon="['far', 'clock']" class="max-vsm:!text-[12px] max-tny:!text-[10px]" />
            <h5>{{date}}</h5>
          </div>
        </div>
        <div class="cont">
          <div class="title">
            <h2 class="max-vsm:!text-xl max-tny:!text-lg">Description</h2>
            <!-- <div class="button" @click="toggleDropDown">
              <button>
                <p>Edit Project</p>
                <i>▼</i>
              </button>
              <div class="dropdown" v-if="dropdownActive">
                <p>Schedule Meeting</p>
                <hr />
                <p>Edit Project</p>
              </div>
            </div> -->
           
            <div v-if="admin" class="flex gap-1 text-lg">
              <!-- <button>
                <font-awesome-icon :icon="['far', 'square-check']" class="max-vsm:!text-[12px] max-tny:!text-[10px] !text-[#546fff]" />
              </button> -->
              <button>
                <font-awesome-icon :icon="['far', 'edit']" class="text-xl !text-[#009033]" />
              </button>

              <button @click="deleteModal = true">
                <font-awesome-icon :icon="['fas', 'trash']" class="text-xl !text-[#FF3231]" />
              </button>
            </div>
        
        
          </div>
          <p class="fsl">
           {{ project.description }}
          </p>
        </div>
        <div class="cont">
          <h2 class="max-vsm:!text-xl max-tny:!text-lg">Project Tasks</h2>
          <div v-if="project.tasks.length == 0" class="w-full flex flex-col gap-2 justify-center items-center min-h-[5rem]">
              <p class="!text-[16px]">No task at the moment</p>
              
          </div>

          <li class="flex justify-between" v-else  v-for="task in project.tasks" :key="task.id">
            <div class="flex !gap-[6px] items-center">
              <span @click="handleTaskStatus(task, task.status == 'completed' ? 'pending': 'completed')" :class="task.status == 'completed' ? '!bg-[#546fff]' : '!bg-none'">
                <font-awesome-icon v-if="task.status == 'completed'" icon="check"  class="!text-[12px]"/>
              </span>
              <router-link>
                 <p class="max-tny:!text-[12px]">{{task.description}}</p>
              </router-link>
            </div>
            <button @click="handleDeleteTask(task.id)">
              <font-awesome-icon :icon="['fas', 'trash']" class="text-[16px] max-tny:text-sm !text-[#546fff]" />
            </button>
          </li>

        
          <li v-if="admin" class="add-task" @click="togglePopUp">
              <span>
                <font-awesome-icon icon="plus"></font-awesome-icon>
              </span>
              <p>Add Task</p>
            </li>
          
        </div>
      </div>
    </div>
    <div class="collaborators w-full lg:w-[28%]">
      <div class="title">
        <h3 class="font-bold text-xl lg:text-lg">Collaborators</h3>

        <div class="icon" v-if="admin">
          <font-awesome-icon icon="plus"></font-awesome-icon>
        </div>
      </div>
      <div v-if="project.users.length == 0" class="w-full flex flex-col gap-2 justify-center items-center min-h-[5rem]">
            <p class="!text-[16px]">No collaborators</p>
            
        </div>
      <div v-else class="collab">
       
        <li  v-for="n in 3" :key="n">
          <div class="info">
            <img :src="images.profileOne" alt="" />

            <div class="txt">
              <h4 class="name">John Doe</h4>
              <h5 class="job">UI/UX Designer</h5>
            </div>
          </div>

          <span class="remove"> ... </span>
        </li>
      </div>
    </div>
    <div class="task-popup" v-if="popUpActive">
      <form class="task-popup-box max-tny:!p-[15px]" @submit.prevent="handleCreateTask">
        <div class="title">
          <h3>Add Task</h3>
          <font-awesome-icon icon="x" @click="togglePopUp"></font-awesome-icon>
        </div>
        <div class="details">
          <div class="cont">
            <label>Task Name</label>
            <input v-model="task.description" type="text" placeholder="e.g Build a website"/>
          </div>
          <div class="cont">
              <label>Start date</label>
              <input type="date" v-model="task.start_date" />
          </div>
          <div class="cont">
              <label>End date</label>
              <input type="date" v-model="task.end_date" />
          
          </div>
          <div class="cont">
            <label>Assign to </label>
            <input type="text" placeholder="e.g Sam@gmail.com" />
          </div>

          <button type="submit">{{taskLoading ? 'Creating...' :'Create Task'}}</button>
        </div>
      </form>
    </div>
    <div v-if="deleteModal == true" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-40">
      <div class="bg-white rounded-lg p-6 max-w-md">
          <h3 class="text-xl text-center font-semibold mb-4">Delete Project</h3>
          <div class="mb-6 text-center">
              <span class="font-medium">Are you sure you want to delete this project</span>?
              <p class="mt-2">
                  This action will delete this project and there is no way to retrieve it
              </p>
            </div>
          <div class="flex justify-end gap-4">
              <button
                  @click="deleteModal = false"
                  class="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors text-sm"
              >
                  Cancel
              </button>
              <button
                  @click="deleteProject"
                  :class="`px-4 py-2 text-white rounded-lg transition-colors text-sm ${
                            deleteModalLoading
                              ? 'bg-red-300 cursor-not-allowed'
                              : 'bg-red-600 hover:bg-red-700'
                          }`"            
                  :disabled="deleteModalLoading"
              >
          
                <span v-if="deleteModalLoading" class="flex items-center justify-center ">
                    <svg class="animate-spin h-5 w-5 mr-2 text-white" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Deleting...
                </span>
                 <span v-else>Delete Project</span>
              </button>
          </div>
      </div>
    </div>

    <div v-if="deleteTaskModal == true" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-40">
      <div class="bg-white rounded-lg p-6 max-w-md">
          <h3 class="text-xl text-center font-semibold mb-4">Delete Task</h3>
          <div class="mb-6 text-center">
              <span class="font-medium">Are you sure you want to delete this task</span>?
              <p class="mt-2">
                  This action will delete this task and there is no way to retrieve it
              </p>
            </div>
          <div class="flex justify-end gap-4">
              <button
                  @click="deleteTaskModal = false"
                  class="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors text-sm"
              >
                  Cancel
              </button>
              <button
                  @click="deleteTask"
                  :class="`px-4 py-2 text-white rounded-lg transition-colors text-sm ${
                            deleteModalLoading
                              ? 'bg-red-300 cursor-not-allowed'
                              : 'bg-red-600 hover:bg-red-700'
                          }`"            
                  :disabled="deleteTaskModalLoading"
              >
          
                <span v-if="deleteTaskModalLoading" class="flex items-center justify-center ">
                    <svg class="animate-spin h-5 w-5 mr-2 text-white" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Deleting...
                </span>
                 <span v-else>Delete Task</span>
              </button>
          </div>
      </div>
    </div>
    <div v-if="changeStatusModal == true" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-40">
      <div class="bg-white rounded-lg p-6 max-w-md">
        <h3 class="text-xl text-center font-semibold mb-4">Confirm Status Update</h3>
        <div class="mb-6 text-center">
          <!-- <span class="font-medium">Are you sure you want to change the task status</span>? -->
          <p class="mt-2">
            This will update the task's status to <span class="font-semibold italic">{{ changeStatus }}</span>. Are you sure you want to proceed?
          </p>
        </div>
        <div class="flex justify-end gap-4">
            <button
                @click="changeStatusModal = false"
                class="px-4 py-2 text-gray-600 hover:bg-gray-100 text-sm rounded-lg transition-colors"
            >
                Cancel
            </button>
            <button
                @click="changeStatus == 'completed' ? handleTaskCompleted() : handleTaskPending() "
                :class="`px-4 py-2 text-white rounded-lg transition-colors text-sm ${
                          changeStatusLoading
                            ? 'bg-[#5c74fe] cursor-not-allowed'
                            : 'bg-[#546fff] hover:bg-[#4c66fa]'
                        }`"            
                :disabled="changeStatusLoading"
            >
        
              <span v-if="changeStatusLoading" class="flex items-center justify-center text-sm">
                  <svg class="animate-spin h-5 w-5 mr-2 text-white" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Updating...
              </span>
                <span v-else>Update Status</span>
            </button>
        </div>
      </div>
    </div>
   

    <popUp
        v-if="isActive && content"
        :content="content"
        :success="success"
        @close="isActive = false"
      />
  </div>
</template>

<script setup>
  import { onMounted, ref, reactive, computed } from "vue";
  import { images } from "../assets/assets";
  import { useRoute, useRouter } from 'vue-router'
  import { deleteProjectService, getProjectService } from "@/services/projects.service";
  import { formatDuration } from '@/utils/formatDuration.js'
  import Spinner from "@/components/Spinner.vue";
  import { createTask, deleteTaskService, markTaskCompleted, markTaskPending } from "@/services/tasks.service";
  import popUp from "@/components/popUp.vue";

  const route = useRoute()
  const router = useRouter()
  const id = route.params.id
  const userId = localStorage.getItem('userId')
  let date
  let admin

  const isActive = ref(false);
  const content = ref("");
  const success = ref(false);
  const loading = ref(true)
  const error = ref(null)
  const deleteModal = ref(false)
  const deleteModalLoading = ref(false)
  const deleteTaskModal = ref(false)
  const deleteTaskId = ref('')
  const deleteTaskModalLoading = ref(false)
  const taskLoading = ref(false)
  const changeStatusTask = ref([])
  const changeStatus = ref('completed')
  const changeStatusLoading = ref(false)
  const changeStatusModal = ref(false)

  const project = ref({
    id: '',
    name: '',
    description: '',
    image: null,
    start_date: null,
    end_date: null,
    status: '',
    completion_percentage: 0,
    created_at: '',
    updated_at: '',
    admin: {
      id: '',
      username: '',
      email: '',
      phone: null,
      image: null,
    },
    tasks: [],  
    users: [],
  })

  const task = reactive({
    project_id: id ,
    description: "",
    start_date: "",
    end_date: "",
    status: "",
  });

  const dropdownActive = ref(false);
  const popUpActive = ref(false);

  const validate = () => {
    if (!task.description || !task.start_date || !task.end_date) {
      content.value = "Task name, start date and end date are required.";
      isActive.value = true;
      success.value = false;
      return false;
    }
    return true;
  };

  function toggleDropDown() {
    dropdownActive.value = !dropdownActive.value;
  }

  function togglePopUp() {
    popUpActive.value = !popUpActive.value;
  }

  const handleGetProjectDetails = async ()=>{
    try {
      loading.value = true
      const response = await getProjectService(id)
      project.value = response?.data
      
      date = formatDuration(project.value)
      admin = response?.data?.admin?.id == userId
      
      console.log(admin);
      loading.value = false
      error.value = null
    } catch (error) {
      error.value = error
      throw new Error(error || 'Failed to fetch project details')
    }finally{
    }
  }

 
  const deleteProject = async () =>{
    try {
      deleteModalLoading.value = true
      const response = await deleteProjectService(id)

      error.value = null
      deleteModalLoading.value = false
      deleteModal.value = false
      router.push('/projects')
    } catch (error) {
      throw new Error(error || 'Failed to fetch project details')
    }
  }

  const handleDeleteTask = (id) =>{
    deleteTaskId.value = id
    deleteTaskModal.value = true
  }

  const deleteTask = async () =>{
    try {
      deleteTaskModalLoading.value = true
      const response = await deleteTaskService(deleteTaskId.value)

      error.value = null
      deleteTaskModalLoading.value = false
      deleteTaskModal.value = false
      handleGetProjectDetails()
    } catch (error) {
      throw new Error(error || 'Failed to fetch task details')
    }
  }

  const handleCreateTask = async () => {
    // console.log(validate());
    
    if (!validate()) return;
    taskLoading.value = true
    try {
      const data = await createTask(task);
      content.value = "Task created succefully!";
      success.value = true;
      isActive.value = true;
      popUpActive.value = false;
      handleGetProjectDetails()
    } catch (error) {
      content.value =
        error.response?.data?.message ||
        "An unexpected error occurred. Please try again.";
      success.value = false;
      isActive.value = true;
    }finally{
      taskLoading.value = false

    }
  };

  const handleTaskStatus = (task, status) =>{
      changeStatusTask.value = task
      changeStatus.value = status
      changeStatusModal.value = true
  }

  const handleTaskCompleted = async () =>{
    changeStatusLoading.value = true

    try {
      const response = await markTaskCompleted(changeStatusTask.value.id)

      content.value = "Status updated succefully!";
      success.value = true;
      isActive.value = true;
      popUpActive.value = false;
      handleGetProjectDetails();
    } catch (error) {
      content.value =
        error.response?.data?.message ||
        "An unexpected error occurred. Please try again.";
      success.value = false;
      isActive.value = true;
    }finally{
      changeStatusLoading.value = false

    }
  }

  const handleTaskPending = async () =>{
    changeStatusLoading.value = true

    try {
      const response = await markTaskPending(changeStatusTask.value.id)

      content.value = "Status updated succefully!";
      success.value = true;
      isActive.value = true;
      popUpActive.value = false;
      handleGetProjectDetails();
    } catch (error) {
      content.value =
        error.response?.data?.message ||
        "An unexpected error occurred. Please try again.";
      success.value = false;
      isActive.value = true;
    }finally{
      changeStatusLoading.value = false

    }
  }

  onMounted(()=>{
    handleGetProjectDetails()
  })
</script>

<style scoped>
.project-details {
  position: relative;
  display: flex;
  width: 100%;
  min-height: 100vh;
  padding: 30px;
  gap: 30px;
  background-color: var(--light-gray-bg);
}

.project-details-container {
  display: flex;
  flex-direction: column;
  gap: 25px;
  /* width: 75%; */
  background-color: var(--white);
  padding: 30px 25px;
  border-radius: 10px;
}

.project-details-container .image {
  width: 100%;
  height: 310px;
}

.project-details-container .image img {
  width: 100%;
  height: 100%;
  border-radius: 10px;
}

.project-details-container .text {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.project-details-container .text .cont {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.project-details-container .text .cont a {
  display: flex;
  gap: 10px;
}

.project-details-container .text  h1 {
  font-size: 30px;
  font-weight: 600;
}

/* .project-details-container .text .cont button:not(.not-btn) {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgb(2, 183, 2);
  width: 140px;
  background-color: var(--light-blue);
  color: var(--white);
  cursor: pointer;
  border-radius: 5px;
  padding: 7px 12px;
} */

/* .project-details-container .text .cont button:not(.not-btn)::before {
  content: "";
  position: absolute;
  height: 100%;
  width: 0.5px;
  background-color: var(--white);
  right: 25%;
} */

/* .project-details-container .text .cont button p {
  font-weight: 600;
} */

/* .project-details-container .text .cont .button {
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
} */

/* .project-details-container .text .cont .button .dropdown {
  width: 110%;
  position: absolute;
  top: 110%;
  display: flex;
  flex-direction: column;
  background-color: var(--light-gray-bg);
  z-index: 1;
  padding: 10px;
  border-radius: 10px;
} */

/* .project-details-container .text .cont .button .dropdown p {
  cursor: pointer;
} */

.project-details h5 {
  font-size: 14px;
  color: var(--gray-text-primary);
}

.fsl::first-letter {
  text-transform: uppercase;
}

.project-details h2 {
  font-size: 24px;
  font-weight: 600;
}

.project-details-container .text .cont p {
  font-size: 14px;
  font-weight: 400;
  line-height: 28px;
}

.project-details-container .text .cont li a {
  display: flex;
  align-items: center;
}

.project-details-container .text .cont .add-task {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  margin-top: 10px;
}

.project-details-container .text .cont .add-task span {
  width: 20px;
  height: 20px;
  color: var(--gray-text-primary);
  background-color: transparent;
  border-radius: 0%;
  font-size: 16px;
  border: 0.5px dashed #a7a7a7;

}

.project-details-container .text .cont span {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  color: var(--white);
  /* background: var(--light-blue); */
  border-radius: 50%;
  border: 2px solid var(--light-blue);
  font-size: 12px;
}

.project-details .title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.project-details .title .icon {
  font-weight: 600;
  font-size: 18px;
  cursor: pointer;
}

.collaborators {
  display: flex;
  flex-direction: column;
  gap: 20px;
  /* width: 28%; */
  /* height: 95vh; */
  background-color: var(--white);
  padding: 20px 19px;
  border-radius: 10px;
  overflow-y: auto;
  padding-bottom: 40px;
}

.collaborators::-webkit-scrollbar {
  background: var(--white);
  width: 6px;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
  overflow: hidden;
}

.collaborators::-webkit-scrollbar-thumb {
  background-color: #4c4c4c8a;
  border-radius: 10px;
  max-height: 10px;
}

.collaborators li {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.collaborators li .info {
  display: flex;
  align-items: center;
  gap: 10px;
}

.collaborators li img {
  height: 50px;
  width: 50px;
  border-radius: 50%;
}

.collaborators li h4 {
  font-size: 14px;
  font-weight: 600;
}

.collaborators li h5 {
  font-size: 14px;
}

.collaborators li span {
  position: relative;
  right: 0;
}

.collaborators li span {
  /* background-color: rgb(235, 3, 3);
        padding: 1px 7px; */
  /* border-radius: 5px; */
  color: var(--gray-text-primary);
  font-size: 15px;
  font-weight: 900;
  cursor: pointer;
}

.collab {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
}

.task-popup {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.595);
  backdrop-filter: blur(10px);
  padding: 10px;
}

.task-popup .task-popup-box {
  background-color: var(--white);
  padding: 20px;
  top: 50%;
  border-radius: 10px;
  width: 400px;
}

.task-popup .task-popup-box .title {
  display: flex;
  font-size: 19px;
  font-weight: 600;
  margin-bottom: 20px;
}

.task-popup .task-popup-box .title svg {
  cursor: pointer;
}

.task-popup .task-popup-box .details {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.task-popup .task-popup-box .details .cont {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.task-popup .task-popup-box .details .cont label {
  color: var(--gray-text-primary);
  font-size: 15px;
}

.task-popup .task-popup-box .details .cont input {
  border: 1px solid #ccc;
  padding: 8px;
  font-size: 14px;
  border-radius: 5px;
}

.task-popup .task-popup-box .details button {
  padding: 10px;
  background-color: var(--light-blue);
  color: var(--white);
  margin-top: 10px;
  border-radius: 10px;
  font-weight: 500;
}
</style>
