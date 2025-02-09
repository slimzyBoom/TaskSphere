<template>
  <header>
    <div class="drop-down-menu" :class="{ active: isDropDownActive }">
      <div class="cont">
        <a @click="dropMenuActive" class="active" href="#home">
          <li>Home</li>
        </a>
        <a @click="dropMenuActive" href="#features">
          <li>Features</li>
        </a>
        <a @click="dropMenuActive" href="#testimonial">
          <li>Testimonial</li>
        </a>
        <a @click="dropMenuActive" href="#contact">
          <li>Contact</li>
        </a>
      </div>
    </div>
    <nav>
      <Logo />

      <ul>
        <li>
          <a href="#home" class="active">Home</a>
        </li>
        <li>
          <a href="#features">Features</a>
        </li>
        <li>
          <a href="#testimonial">Testimonial</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <router-link to="/login">Login</router-link>
        </li>
      </ul>
      <div class="icons">
        <router-link :to="{ name: 'login' }">
          <font-awesome-icon :icon="['far', 'user']" />
        </router-link>
        <div
          @click="dropMenuActive"
          class="menu-icon"
          :class="{ cancel: isDropDownActive }"
        ></div>
      </div>
    </nav>
  </header>
</template>

<script>
import { ref } from "vue";
import Logo from "./Logo.vue";
export default {
  components: {
    Logo,
  },

  setup() {
    const isDropDownActive = ref("");

    function dropMenuActive() {
      isDropDownActive.value = !isDropDownActive.value;
    }

    return {
      isDropDownActive,
      dropMenuActive,
    };
  },
};
</script>

<style scoped>
.drop-down-menu {
  position: fixed;
  top: -200%;
  width: 100%;
  height: 100%;
  cursor: pointer;
  padding: 140px 30px;
  background-color: var(--light-gray-bg);
  transition: 0.5s ease-in-out;
  z-index: 5;
}

.drop-down-menu.active {
  position: fixed;
  top: 0%;
}

.drop-down-menu .cont {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1.6rem;
}

.drop-down-menu a {
  display: flex;
  position: relative;
  padding: 20px;
  width: 95%;
  background-color: #1e212b8c;
  border-radius: 7px;
}

.drop-down-menu a::before {
  position: absolute;
  content: "";
  width: 0%;
  height: 100%;
  top: 0;
  left: 0;
  border-radius: 7px;
  background-color: var(--light-blue);
  transition: 0.2s ease-in-out;
}

.drop-down-menu a:hover::before {
  width: 100%;
}

.drop-down-menu li {
  position: relative;
  font-size: 20px;
  font-weight: 600;
  color: var(--white);
  z-index: 5;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100vw;
  padding: 29px 50px;
  margin-bottom: 60px;
  background-color: var(--white);
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 10;
}

nav ul {
  display: flex;
  gap: 30px;
}

nav ul li a {
  position: relative;
  padding: 5px 0px;
  opacity: 0.7;
}

nav ul li a::before {
  content: "";
  position: absolute;
  width: 0%;
  height: 2px;
  background-color: var(--black);
  bottom: 0;
  transition: 0.3s ease;
}

nav ul li a.active::before {
  width: 40%;
}

nav ul li a:hover::before {
  width: 100%;
}

nav .logo {
  color: var(--light-blue);
}

header nav .menu-icon {
  width: 25px;
  height: 3px;
  position: relative;
  border-radius: 10px;
  opacity: 1;
  background-color: var(--black);
  opacity: 0.8;
}

header nav .icons {
  display: none;
  align-items: center;
  gap: 20px;
}

header nav .icons svg {
  opacity: 0.7;
  font-size: 20px;
  color: var(--black);
}

header nav .menu-icon.cancel {
  background-color: var(--white);
}

header nav .menu-icon.cancel::before {
  transform: rotate(45deg);
  top: 0;
}
header nav .menu-icon::before {
  position: absolute;
  content: "";
  top: -8px;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  transition: 0.3s ease-in-out;
  background-color: var(--black);
  opacity: 0.8;
}

header nav .menu-icon.cancel::after {
  transform: rotate(-45deg);
  top: 0;
}
header nav .menu-icon::after {
  position: absolute;
  content: "";
  top: 8px;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  transition: 0.3s ease-in-out;
  background-color: var(--black);
  opacity: 0.8;
}

@media (max-width: 750px) {
  header nav .icons {
    display: flex;
  }

  nav ul {
    display: none;
  }
}

@media (max-width: 500px) {
  .drop-down-menu {
    padding: 140px 20px;
  }

  .drop-down-menu.active a {
    width: 100%;
  }

  .drop-down-menu.active .cont {
    gap: 1.3rem;
  }

  .drop-down-menu.active a {
    padding: 10px 18px;
  }

  .drop-down-menu.active li {
    position: relative;
    font-size: 18px;
  }

  nav {
    padding: 25px 30px;
  }
}
</style>
