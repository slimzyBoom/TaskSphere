<template>
  <div class="signup-container">
    <form class="signup-form" @submit.prevent="handleRegsitration">
      <h1>SIGN UP</h1>
      <div class="cont">
        <span>
          <font-awesome-icon icon="envelope" />
        </span>
        <input type="text" v-model="credentials.email" placeholder="Email" />
        <p v-if="errors.email" class="text-xs text-red-400">
          {{ errors.email }}
        </p>
      </div>
      <div class="cont">
        <span>
          <font-awesome-icon icon="user" />
        </span>
        <input
          type="text"
          v-model="credentials.username"
          placeholder="Username"
        />
      </div>
      <div class="cont">
        <span>
          <font-awesome-icon icon="lock" />
        </span>
        <input
          type="password"
          v-model="credentials.password"
          placeholder="Password"
        />
        <p v-if="errors.password" class="text-xs text-red-400">
          {{ errors.password }}
        </p>
      </div>
      <div class="cont">
        <span>
          <font-awesome-icon icon="lock" />
        </span>
        <input
          type="password"
          v-model="credentials.password_confirmation"
          placeholder="Confirm Password"
        />
        <p v-if="errors.password_confirmation" class="text-xs text-red-400">
          {{ errors.password_confirmation }}
        </p>
      </div>
      <div class="text">
        <router-link to="/login"
          >Already have an account? <span>Sign In</span></router-link
        >
      </div>
      <button type="submit">Register</button>
      <button class="google-btn">
        <img :src="images.googleLogo" alt="" /> <span>Google</span>
      </button>
    </form>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { images } from "../assets/assets";
import { useRouter } from "vue-router";
import { useUserStore } from "../stores/user";
const userStore = useUserStore();
const router = useRouter();
const credentials = reactive({
  email: "",
  username: "",
  password: "",
  password_confirmation: "",
});
const errors = reactive({
  email: "",
  password: "",
  password_confirmation: "",
});

const validateForm = () => {
  let isValid = true;
  let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  // Email Validation
  if (!credentials.email) {
    errors.email = "Email is required.";
    isValid = false;
  } else if (!emailPattern.test(credentials.email)) {
    errors.email = "Invalid email format.";
    isValid = false;
  } else {
    errors.email = "";
  }

  // Password Validation
  if (!credentials.password) {
    errors.password = "Password is required.";
    isValid = false;
  } else if (credentials.password.length < 6) {
    errors.value.password = "Password must be at least 6 characters.";
    isValid = false;
  } else {
    errors.password = "";
  }

  // Password Confirmation Validation
  if (!credentials.password_confirmation) {
    errors.password_confirmation = "Password Confirmation is required.";
    isValid = false;
  } else {
    errors.password = "";
  }

  if (credentials.password !== credentials.password_confirmation) {
    errors.password_confirmation = "Passwords do not match.";
    isValid = false;
  } else {
    errors.password = "";
  }

  return isValid;
};

const handleRegsitration = async () => {
  if (!validateForm()) return;
  try {
    await userStore.registerUser(credentials);
    router.push({ name: "dashboard" });
  } catch (error) {
    console.error(error);
  }
};
</script>

<style scoped>
.signup-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 90vh;
}

.signup-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 400px;
  padding: 20px 25px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.06);
  font-family: Arial, sans-serif;
}

.signup-form:hover {
  box-shadow: 0 8px 10px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.06);
}

.signup-form h1 {
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  color: var(--black);
  padding: 10px 0;
}

.signup-form .cont {
  display: flex;
  align-items: center;
  gap: 11px;
  width: 100%;
  border: 1px solid var(--black);
  border-radius: 5px;
  padding: 10px;
}

.signup-form .cont svg {
  font-size: 15px;
}

.signup-form input {
  width: 100%;
  font-size: 14px;
}

.signup-form button {
  background-color: var(--light-blue);
  color: var(--white);
  border-radius: 8px;
  padding: 10px 0;
  font-weight: 600;
}

.signup-form a {
  font-size: 15px;
}

.signup-form a span {
  color: var(--light-blue);
}

.signup-form button.google-btn {
  display: flex;
  align-items: center;
  gap: 5px;
  justify-content: center;
  background-color: rgba(
    235,
    233,
    233,
    0.5
  ); /* Darker background with opacity */
  color: var(--black); /* White text */
  border: 2px solid rgba(0, 0, 0, 0.2);
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 8px;
  outline: none;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(8px);
  margin-top: -8px;
}

.signup-form button.google-btn span {
  font-weight: 700;
}

.signup-form button img {
  width: 20px;
  height: 20px;
}

@media (max-width: 425px) {
  .signup-form {
    width: 90%;
  }
}
</style>
