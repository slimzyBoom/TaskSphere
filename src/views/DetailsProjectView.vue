<template>
  <div class="project-details flex flex-col lg:flex-row">
    <div class="project-details-container w-full lg:w-[75%]">
      <div class="image">
        <img :src="images.taskImageTwo" alt="" />
      </div>
      <div class="text">
        <div class="cont">
          <h1>Creating Awesome Mobile Apps</h1>
          <div class="instructure">
            <h5>UI UX Design . Apps Design</h5>
          </div>
        </div>
        <div class="cont">
          <div class="title">
            <h2>Description</h2>
            <div class="button" @click="toggleDropDown">
              <button>
                <p>Edit Project</p>
                <i>▼</i>
              </button>
              <div class="dropdown" v-if="dropdownActive">
                <p>Schedule Meeting</p>
                <hr />
                <p>Edit Project</p>
              </div>
            </div>
          </div>
          <p>
            Follow the video tutorial above. Understand how to use each tool in
            the Figma application. Also learn how to make a good and correct
            design. Starting from spacing, typography, content, and many other
            design hierarchies. Then try to make it yourself with your
            imagination and inspiration.
          </p>
        </div>
        <div class="cont">
          <h2>Project Tasks</h2>
          <li>
            <router-link>
              <span>
                <font-awesome-icon icon="check" />
              </span>
              <p>Understanding the tools in Figma</p>
            </router-link>
          </li>
          <li>
            <router-link>
              <span>
                <font-awesome-icon icon="check" />
              </span>
              <p>Understand the basics of making designs</p>
            </router-link>
          </li>
          <li>
            <router-link>
              <span>
                <font-awesome-icon icon="check" />
              </span>
              <p>Designing a mobile application using figma</p>
            </router-link>
          </li>
          <li>
            <router-link>
              <span>
                <font-awesome-icon icon="check" />
              </span>
              <p>Presenting the design flow</p>
            </router-link>
          </li>

          <li class="add-task" @click="togglePopUp">
            <span>
              <font-awesome-icon icon="plus"></font-awesome-icon>
            </span>
            <p>Add Task</p>
          </li>
        </div>
      </div>
    </div>
    <div class="collaborators w-fll lg:w-[28%]">
      <div class="title">
        <h2>Collaborators</h2>

        <div class="icon">
          <font-awesome-icon icon="plus"></font-awesome-icon>
        </div>
      </div>
      <div class="collab">
        <li v-for="n in 3" :key="n">
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
      <div class="task-popup-box">
        <div class="title">
          <h3>Add Task</h3>
          <font-awesome-icon icon="x" @click="togglePopUp"></font-awesome-icon>
        </div>
        <div class="details">
          <div class="cont">
            <label>Task Name</label>
            <input type="text" />
          </div>
          <div class="cont">
            <label>Assign to </label>
            <input type="text" />
          </div>

          <button>Create Task</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { images } from "../assets/assets";
export default {
  setup() {
    const dropdownActive = ref(false);
    const popUpActive = ref(false);

    function toggleDropDown() {
      dropdownActive.value = !dropdownActive.value;
    }

    function togglePopUp() {
      popUpActive.value = !popUpActive.value;
    }

    return {
      images,
      dropdownActive,
      popUpActive,
      toggleDropDown,
      togglePopUp,
    };
  },
};
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
  gap: 15px;
}

.project-details-container .text .cont a {
  display: flex;
  gap: 10px;
}

.project-details-container .text .cont h1 {
  font-size: 32px;
  font-weight: 600;
}

.project-details-container .text .cont button {
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* background-color: rgb(2, 183, 2); */
  width: 140px;
  background-color: var(--light-blue);
  color: var(--white);
  cursor: pointer;
  border-radius: 5px;
  padding: 7px 12px;
}

.project-details-container .text .cont button::before {
  content: "";
  position: absolute;
  height: 100%;
  width: 0.5px;
  background-color: var(--white);
  right: 25%;
}

.project-details-container .text .cont button p {
  font-weight: 600;
}

.project-details-container .text .cont .button {
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
}

.project-details-container .text .cont .button .dropdown {
  width: 110%;
  position: absolute;
  top: 110%;
  display: flex;
  flex-direction: column;
  background-color: var(--light-gray-bg);
  z-index: 1;
  padding: 10px;
  border-radius: 10px;
}

.project-details-container .text .cont .button .dropdown p {
  cursor: pointer;
}

.project-details h5 {
  font-size: 14px;
  color: var(--gray-text-primary);
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
  width: 30px;
  height: 30px;
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
  width: 20px;
  height: 20px;
  color: var(--white);
  background-color: var(--light-blue);
  border-radius: 50%;
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
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.595);
  backdrop-filter: blur(10px);
}

.task-popup .task-popup-box {
  background-color: var(--white);
  transform: translate(30%, 0%);
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
