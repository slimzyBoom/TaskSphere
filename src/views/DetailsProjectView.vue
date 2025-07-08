<template>
  <div  v-if="loading" class="relative w-full min-h-[100vh]">
    <Spinner :occupiedHeight="'-10%'"/>

  </div>
  <div v-else>
    <Header :headerProps="headerProps"></Header>

    <div  class="project-details flex flex-col lg:flex-row max-tny:!p-[20px]">
      <div class="project-details-container w-full lg:w-[70%] max-tny:!p-[20px]">
        <div class="image max-vsm:!h-[280px] max-tny:!h-[200px]">
          <img :src="project.image || images.taskImageTwo" alt="" />
        </div>
        <div class="text max-tny:!gap-5">
          <div class="flex flex-col ">
            <h1 className="max-vsm:!text-2xl  max-tny:!text-xl">{{project.name}}</h1>
            <div class="flex gap-1 items-center !text-[#54577A]">
              <font-awesome-icon :icon="['far', 'clock']" class="max-vsm:!text-[12px] max-tny:!text-[10px]" />
              <h5>{{date}}</h5>
            </div>
          </div>
          <div class="cont">
            <div class="title">
              <h2 class="max-vsm:!text-xl max-tny:!text-[16px]">Description</h2>
            
              <div v-if="admin" class="flex gap-1">
                <!-- <button>
                  <font-awesome-icon :icon="['far', 'square-check']" class="max-vsm:!text-[12px] max-tny:!text-[10px] !text-[#546fff]" />
                </button> -->
                <button @click="editProjectModal = true">
                  <font-awesome-icon :icon="['far', 'edit']" class="text-xl max-tny:!text-[16px]  !text-[#009033]" />
                </button>

                <button @click="deleteModal = true">
                  <font-awesome-icon :icon="['fas', 'trash']" class="text-xl max-tny:!text-[16px]  !text-[#FF3231]" />
                </button>
              </div>
          
          
            </div>
            <p class="fsl !break-words vsm:!text-[15px] !leading-6">
            {{ project.description }}
            </p>
          </div>
          <div class="cont">
            <h2 class="max-vsm:!text-xl max-tny:!text-[16px]">Project Tasks</h2>
            <div v-if="project.tasks.length == 0" class="w-full flex flex-col gap-2 justify-center items-center min-h-[5rem]">
                <p class="!text-[16px]">No task at the moment</p>
            </div>

            <li class="flex justify-between gap-3" v-else  v-for="task in project.tasks" :key="task.id">
              <div class="flex !gap-[6px] items-center">
                <span @click="admin && handleTaskStatus(task, task.status == 'completed' ? 'pending': 'completed')" :class="task.status == 'completed' ? '!bg-[#546fff]' : '!bg-none'">
                  <font-awesome-icon v-if="task.status == 'completed'" icon="check"  class="!text-[12px]"/>
                </span>
                <router-link>
                  <p class="max-tny:!text-[12px] first-letter-capital">{{task.description}}</p>
                </router-link>
              </div>
              <div v-if="admin" class="flex gap-2 max-tny:gap-1">
                <button @click="handleEditTask(task)">
                  <font-awesome-icon :icon="['far', 'edit']" class="text-[16px] max-tny:text-sm !text-[#546fff]" />
                </button>
                <button @click="handleDeleteTask(task.id)">
                  <font-awesome-icon :icon="['fas', 'trash']" class="text-[16px] max-tny:text-sm !text-[#546fff]" />
                </button>
              </div>
             
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

          <div class="icon" v-if="admin" @click="collaboratorModal = true">
            <font-awesome-icon icon="plus"></font-awesome-icon>
          </div>
        </div>
        <div v-if="project.users.length == 0" class="w-full flex flex-col gap-2 justify-center items-center min-h-[5rem]">
            <p class="!text-[16px]">No collaborators</p>
            
        </div>
        <div v-else class="collab" >
          <li v-if="!admin" >
            <div class="info">
              <img :src="project.admin.image || images.profileOne" alt="" />

              <div class="txt">
                <h4 class="name flex capitalize items-end">{{ project.admin.username }} <p class="!text-[12px] font-normal ml-0.5">(admin)</p> </h4>
                <h5 class="job">{{project.admin.email}}</h5>
              </div>
            </div>

          </li>
          <template  v-for="user in project.users" :key="user.id">
            <li class="relative" v-if="user.id !== userId" >
              <div class="info">
                <img :src="user.image || images.profileOne" alt="" />

                <div class="txt">
                  <h4 class="name truncate capitalize">{{ user.username }}</h4>
                  <h5 class="truncate max-w-[200px] !leading-4" >{{user.email}}</h5>
                </div>
              </div>

              <span @click="toggleCollaboratorDropDown(user)" v-if="admin" class="remove"> ... </span>
              <div v-if="collaboratorDropdown && collaboratorDropdownUser.id == user.id" class="shadow bg-white rounded-lg absolute w-[120px] -right-2 top-6 z-10 overflow-hidden">
                <li @click=" collaboratorDropdown = false; removeCollaboratorModal = true" class="border-b p-1 pl-3 text-sm cursor-pointer hover:bg-red-500 hover:text-white">Remove</li>
                <li class="border-b p-1 pl-3 text-sm cursor-pointer hover:bg-[#546fff] hover:text-white">Assign task</li>
              </div>
            </li>
          </template>
         
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
            <!-- <div class="cont">
              <label>Assign to </label>
              <input type="text" placeholder="e.g Sam@gmail.com" />
            </div> -->

            <button type="submit">{{taskLoading ? 'Creating...' :'Create Task'}}</button>
          </div>
        </form>
      </div>
      <div class="task-popup" v-if="editTaskModal">
        <form class="task-popup-box max-tny:!p-[15px]" @submit.prevent="handleUpdateTask">
          <div class="title">
            <h3>Edit Task</h3>
            <font-awesome-icon icon="x" @click="editTaskModal = false"></font-awesome-icon>
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
            <!-- <div class="cont">
              <label>Assign to </label>
              <input type="text" placeholder="e.g Sam@gmail.com" />
            </div> -->

            <button type="submit">{{editTaskModalLoading ? 'Updating...' :'Update Task'}}</button>
          </div>
        </form>
      </div>
      <div v-if="deleteModal == true" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-40">
        <div class="bg-white rounded-lg p-6 max-w-md">
            <!-- <h3 class="text-xl text-center font-semibold mb-4">Delete Project</h3> -->
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
            <!-- <h3 class="text-xl text-center font-semibold mb-4">Delete Task</h3> -->
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
          <h3 class=" text-center font-semibold">Confirm Status Update</h3>
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
      <div class="task-popup" v-if="editProjectModal">
        <form class="task-popup-box !max-h-[90vh] !overflow-auto max-tny:!p-[15px]" @submit.prevent="handleUpdateProject">
          <div class="title">
            <h3>Edit Project</h3>
            <font-awesome-icon icon="x" @click="editProjectModal = false"></font-awesome-icon>
          </div>
          <div class="details">
            <div class="cont">
              <label>Project Name</label>
              <input v-model="editProject.name" type="text" placeholder="e.g Build a website"/>
            </div>
            <div class="cont">
              <label>Project Description</label>
              <textarea class="!min-h-[100px]" v-model="editProject.description" type="text" placeholder="e.g Building a website" ></textarea>
            </div>
            <div class="cont">
              <h3 class="max-vsm:!text-sm">Image</h3>
              <div
                class="border-2 border-dashed border-gray-300 h-40 rounded flex items-center justify-center cursor-pointer"
                @click="triggerFileInput"
              >
                <div v-if="previewUrl" class="w-full h-full relative rounded overflow-hidden">
                  <img
                    :src="previewUrl"
                    alt="Preview"
                    class="w-full h-full object-fill"
                  />
                </div>
                <div v-else class="flex flex-col justify-center items-center">
                  <font-awesome-icon class="text-4xl text-[#BAC8FF]" :icon="['far', 'image']" />

                  <p class="text-[#BAC8FF] mt-2">Click to Upload</p>
                </div>
                <input
                  type="file"
                  accept="image/*"
                  ref="fileInputRef"
                  class="hidden"
                  @change="handleImageChange"
                />
              </div>
            </div>
            <div class="cont">
                <label>Start date</label>
                <input type="date" v-model="formattedStartDate" />
            </div>
            <div class="cont">
                <label>End date</label>
                <input type="date" v-model="formattedEndDate" />
            
            </div>
            <div class="cont">
              <label>Status</label>
              <select v-model="editProject.status" class="border rounded cursor-pointer px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-300">
                <option class="cursor-pointer" value="upcoming">Upcoming</option>
                <option class="cursor-pointer" value="in-progress">In Progress</option>
                <option class="cursor-pointer" value="completed">Completed</option>
              </select>
            </div>
            <!-- <div class="cont">
              <label>Assign to </label>
              <input type="text" placeholder="e.g Sam@gmail.com" />
            </div> -->

            <button type="submit">{{editProjectModalLoading ? 'Updating...' :'Update Project'}}</button>
          </div>
        </form>
      </div>
      <div class="task-popup " v-if="collaboratorModal">
        <form class="task-popup-box max-tny:!p-[15px] !w-[26rem]" @submit.prevent="handleAddCollaborators">
          <div class="title">
            <h3>Invite Collaborator</h3>
            <font-awesome-icon icon="x" @click="closeCollaboratorModal"></font-awesome-icon>
          </div>
          <div class="details">
            <div class="flex gap-2">
              <div class="flex w-full border rounded-lg items-center">
                <font-awesome-icon class="text-gray-400 p-2.5" icon="search"></font-awesome-icon>
                <input @keydown.enter.prevent="getSelectedUsers" v-model="searchedUser" type="text" class="border-none w-full h-full placeholder:text-sm" placeholder="e.g Johndoe@gmail.com">
              </div>
              <button :disabled="!searchedUser" type="button" @click="getSelectedUsers()" class=" !px-3 !mt-0 !p-0 !rounded-md">
                <font-awesome-icon class="" icon="plus"></font-awesome-icon>
              </button>
            </div>
            <div v-if="getUserLoading" class="flex items-center justify-center w-full h-[300px] relative">
              <div className="container flex items-center absolute justify-center h-full min-w-full bg-white z-10">
                <div
                  className="inline-block h-14 w-14 animate-spin rounded-full border-8 border-solid border-current border-e-transparent align-[-0.125em] text-[#BAC8FF]"
                  role="status"
                >
                  <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                    Loading...
                  </span>
                </div>
              </div>
            </div>
            <div v-if="!getUserLoading && addedUsers.length > 0"  class="flex flex-col gap-2 h-[300px] overflow-y-auto">
              <template v-for="user in addedUsers" :key="user.id">
                <li
                  v-if="user.id !== userId"
                  :class="{
                    // 'bg-[#546fff] text-white': selectedCollaborator.id === user.id,
                    ' flex justify-between items-center gap-1 rounded-lg w-full cursor-pointer p-2': true
                  }"
                >
                  <div class="flex gap-1">
                    <img class="w-[40px] h-[40px] rounded-full" :src="user.image || images.profileOne" alt="" />
                    <div class="txt">
                      <h4 class="name capitalize">{{ user.username }}</h4>
                      <h5 class="job !-mt-1">{{ user.email }}</h5>
                    </div>
                  </div>

                  <div @click="removeFromAddList(user)" class="">
                    <font-awesome-icon :icon="['fas', 'trash']" class="!text-[#FF3231]" />
                  </div>
                </li>
               </template>
            </div>
            <div v-if="!getUserLoading && addedUsers.length <= 0" class="h-[300px] p-1 text-[15px] text-gray-500 flex text-center justify-center">
              Invite list is empty
            </div>
            <button :disabled="addedUsersEmail.length == 0" type="submit">{{collaboratorModalLoading ? 'Inviting...' :'Send Invite'}}</button>
          </div>
        </form>
      </div>    
      <div v-if="removeCollaboratorModal == true" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-40">
        <div class="bg-white rounded-lg p-6 max-w-md">
            <!-- <h3 class="text-xl text-center font-semibold mb-4">Remove Collaborator</h3> -->
            <div class="mb-6 text-center">
                <span class="font-medium">Are you sure you want to remove <span class="capitalize italic">{{ collaboratorDropdownUser.username }} </span></span> ?
                <p class="mt-2">
                  This action will remove the user from the project and all their task associations.
                </p>
              </div>
            <div class="flex justify-end gap-4">
                <button
                    @click="removeCollaboratorModal = false"
                    class="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors text-sm"
                >
                    Cancel
                </button>
                <button
                    @click="handleRemoveCollaborators"
                    :class="`px-4 py-2 text-white rounded-lg transition-colors text-sm ${
                              removeCollaboratorModalLoading
                                ? 'bg-red-300 cursor-not-allowed'
                                : 'bg-red-600 hover:bg-red-700'
                            }`"            
                    :disabled="removeCollaboratorModalLoading"
                >
            
                  <span v-if="removeCollaboratorModalLoading" class="flex items-center justify-center ">
                      <svg class="animate-spin h-5 w-5 mr-2 text-white" viewBox="0 0 24 24">
                          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Removing...
                  </span>
                  <span v-else>Remove User</span>
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
  </div>
 
</template>

<script setup>
  import { onMounted, ref, reactive, computed } from "vue";
  import { images } from "../assets/assets";
  import { useRoute, useRouter } from 'vue-router'
  import { deleteProjectService, getProjectService, updateProject } from "@/services/projects.service";
  import { formatDuration } from '@/utils/formatDuration.js'
  import Spinner from "@/components/Spinner.vue";
  import { createTask, deleteTaskService, markTaskCompleted, markTaskPending, updateTask, updateTaskStatus } from "@/services/tasks.service";
  import popUp from "@/components/popUp.vue";
  import Header from "@/components/Header.vue"
  import { fetchAllUsersService } from "@/services/user.auth.service";
  import { addCollaborator, deleteCollaborator } from "@/services/collaborators.service";
import { getUserDetails } from "@/services/user.service";

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
  const editProjectModal = ref(false)
  const editProjectModalLoading = ref(false)
  const editTaskModal = ref(false)
  const editTaskModalLoading = ref(false)
  const addedUsers = ref([])
  const selectedCollaborator = ref({})
  const collaboratorModal = ref(false)
  const collaboratorModalLoading = ref(false)
  const searchedUser = ref('')
  const addedUsersEmail = ref([])
  const collaboratorDropdown = ref(false)
  const collaboratorDropdownUser = ref([])
  const removeCollaboratorModal = ref(false)
  const removeCollaboratorModalLoading = ref(false)
  const getUserLoading = ref(false)

  const fileInputRef = ref(null)
  const previewUrl = ref(null)

  const triggerFileInput = () => {
    fileInputRef.value?.click()
  }

  const toggleCollaboratorDropDown = (user) =>{
    if (collaboratorDropdownUser.value === user) {
      collaboratorDropdown.value = !collaboratorDropdown.value;
      if (!collaboratorDropdown.value) {
        collaboratorDropdownUser.value = null;
      }
    } else {
      collaboratorDropdown.value = true;
      collaboratorDropdownUser.value = user;
    }
  }

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

  const editProject = ref({
    id: '',
    name: '',
    description: '',
    image: null,
    start_date: null,
    end_date: null,
    status: '',
    admin: {
      id: ''
    }
  })

  const headerProps = {
    title: "Project Details",
    titleText: "Stay aligned with your team on key project details.",
    search: false,
    filter: false,
    icons: true,
    button: true,
  };

  const task = reactive({
    id: "",
    project_id: id ,
    description: "",
    start_date: "",
    end_date: "",
    status: "",
  });

  const dropdownActive = ref(false);
  const popUpActive = ref(false);

  const formattedStartDate = computed({
    get() {
      return editProject.value.start_date?.split('T')[0] || ''
    },
    set(value) {
      editProject.value.start_date = `${value}T00:00:00.000000Z`
    }
  })

  const formattedEndDate = computed({
    get() {
      return editProject.value.end_date?.split('T')[0] || ''
    },
    set(value) {
      editProject.value.end_date = `${value}T00:00:00.000000Z`
    }
  })

  const handleImageChange = (event) => {
    const file = event.target.files[0]
    if (file) {
      previewUrl.value = URL.createObjectURL(file)
      editProject.value.image = file;

    }
  }

  const closeCollaboratorModal = () =>{
    // selectedCollaborator.value = {}
    collaboratorModal.value = false
  }

  const taskValidate = () => {
    if (!task.description || !task.start_date || !task.end_date) {
      content.value = "Task name, start date and end date are required.";
      isActive.value = true;
      success.value = false;
      return false;
    }
    return true;
  };

  function handleEditTask(val) {
    task.description = val.description
    task.start_date = val.start_date
    task.end_date = val.end_date
    task.id = val.id

    editTaskModal.value = true
    
  }

  function togglePopUp() {
    popUpActive.value = !popUpActive.value;
  }

  const handleGetAllUsers = async ()=>{
    loading.value = true
    try {

      const response = await fetchAllUsersService()

      // addedUsers.value = response.data

      loading.value = false
      error.value = null
      
    } catch (error) {
      error.value = error.message
      throw new Error(error || 'Failed to fetch users')
    }
  }

  const handleGetProjectDetails = async ()=>{
    try {
      loading.value = true
      const response = await getProjectService(id)
      project.value = response?.data

      editProject.value.id = response?.data.id
      editProject.value.name = response?.data.name
      editProject.value.description = response?.data.description
      editProject.value.status = response?.data.status
      editProject.value.start_date = response?.data.start_date
      editProject.value.end_date = response?.data.end_date
      editProject.value.admin.id = response?.data.admin.id

      
      date = formatDuration(project.value)
      admin = response?.data?.admin?.id == userId
      console.log(response.data);
      
      loading.value = false
      // previewUrl.value = response?.data.image
      error.value = null
    } catch (error) {
      error.value = error
      throw new Error(error || 'Failed to fetch project details')
    }finally{
    }
  }

  const handleUpdateProject = async () => {
    editProjectModalLoading.value = true
    try {
      console.log(editProject.value)
      const data = await updateProject(editProject.value, id);
      handleGetProjectDetails()
      content.value = "Project updated!";
      success.value = true;
      isActive.value = true;

    } catch (error) {
      console.error(error.message);
      content.value =
        error.message ||
        "An unexpected error occurred. Please try again.";
      success.value = false;
      isActive.value = true;
    }finally{
      editProjectModalLoading.value = false
      editProjectModal.value = false

    }
  };
 
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
    if (!taskValidate()) return;
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

  const handleUpdateTask = async () => {
    if (!taskValidate()) return;
    editTaskModalLoading.value = true
    try {
      const data = await updateTask(task);
      task.description = ""
      task.start_date = ""
      task.end_date = ""
      task.id = ""
      content.value = "Task updated succefully!";
      success.value = true;
      isActive.value = true;
      editTaskModal.value = false;
      handleGetProjectDetails()
    } catch (error) {
      content.value =
        error.message ||
        "An unexpected error occurred. Please try again.";
      success.value = false;
      isActive.value = true;
    }finally{
      editTaskModalLoading.value = false

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
      // const response = await markTaskCompleted(changeStatusTask.value.id)
      const response = await updateTaskStatus(changeStatusTask.value.id, 'completed')

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
      changeStatusModal.value = false

    }
  }

  const handleTaskPending = async () =>{
    changeStatusLoading.value = true

    try {
      // const response = await markTaskPending(changeStatusTask.value.id)
      const response = await updateTaskStatus(changeStatusTask.value.id, 'pending')


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
      changeStatusModal.value = false

    }
  }

  const handleAddCollaborators = async () =>{
    collaboratorModalLoading.value = true
    try {
      
      const response = await addCollaborator(id, addedUsersEmail.value)

      handleGetProjectDetails();

      content.value = "Invite sent succefully!";
      success.value = true;
      isActive.value = true;
      popUpActive.value = false;
      
    } catch (error) {
      content.value =
        error.message ||
        "An unexpected error occurred. Please try again.";
      success.value = false;
      isActive.value = true;
    }finally{
      collaboratorModal.value = false
      collaboratorModalLoading.value = false
      selectedCollaborator.value = []
    }
  }

  const getSelectedUsers = async ()=>{
    if (addedUsersEmail.value.includes(searchedUser.value)) {
      content.value =
      "Already added user to the list";
      success.value = false;
      isActive.value = true;
    
      return
    }

      getUserLoading.value = true

    try {
    console.log('mf');
    
      const response = await getUserDetails(searchedUser.value)
      
      if (response.data.id == userId) {
        content.value =
        "You can’t invite your own account.";
        success.value = false;
        isActive.value = true;
      
        return
      }

      const tempAddedUsers = [...addedUsers.value, response.data]
      addedUsers.value = tempAddedUsers

      const tempAddedUsersEmail = [...addedUsersEmail.value , response.data.email]
      addedUsersEmail.value = tempAddedUsersEmail

      console.log('addedUsersEmail:',addedUsersEmail.value);
      
      error.value = null
      
    } catch (error) {
      error.value = error.message
      content.value =
        "Failed to fetch user. Please try again.";
      success.value = false;
      isActive.value = true;
      // throw new Error(error || 'Failed to fetch users')

    }finally{
      getUserLoading.value = false

    }
    
  }

  const removeFromAddList = (user) =>{
    const tempAddedUsers = addedUsers.value.filter(u => u !== user)
    addedUsers.value = tempAddedUsers

    const tempAddedUsersEmail = addedUsersEmail.value.filter(email => email !== user.email)
    addedUsersEmail.value = tempAddedUsersEmail

    console.log('addedUsersEmail',addedUsersEmail.value);
    console.log('addedUsers',addedUsers.value);
    
  }

  const handleRemoveCollaborators = async () =>{
    removeCollaboratorModalLoading.value = true
    try {
      const response = await deleteCollaborator(id, collaboratorDropdownUser.value.id)

      content.value = "User removed succefully!";
      success.value = true;
      isActive.value = true;
      popUpActive.value = false;
      handleGetProjectDetails();
      
    } catch (error) {
      content.value =
        error.message ||
        "An unexpected error occurred. Please try again.";
      success.value = false;
      isActive.value = true;
    }finally{
      removeCollaboratorModal.value = false
      removeCollaboratorModalLoading.value = false
    }
  }


  onMounted(()=>{
    handleGetProjectDetails()
    handleGetAllUsers()
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
  line-height: 13px;
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
  overflow-x: hidden;
  padding-bottom: 40px;
}

.collaborators::-webkit-scrollbar {
  background: var(--white);
  width: 6px;
  height: 6px;
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
  /* align-items: center; */
  justify-content: space-between;
}

.collaborators li .info {
  display: flex;
  align-items: center;
  gap: 10px;
}

.collaborators li img {
  height: 45px;
  width: 45px;
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
  z-index: 20;
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

.task-popup .task-popup-box .details .cont input,
.task-popup .task-popup-box .details .cont textarea {
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
  cursor: pointer;
}

button:disabled{
  background-color: #546eff95 !important;
  cursor: default  !important;
}

</style>
