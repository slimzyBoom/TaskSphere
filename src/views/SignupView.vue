<template>
   <div class="signup-container">
    <form class="signup-form" @submit.prevent="">
        <h1>SIGN UP</h1>
        <div class="cont">
            <span>
                <font-awesome-icon icon="envelope" />
            </span>
           <input type="text" v-model="email" placeholder="Email"> 
        </div>
        <div class="cont">
            <span>
                <font-awesome-icon icon="user" />
            </span>
           <input type="text" v-model="username" placeholder="Username"> 
        </div>
        <div class="cont">
            <span>
                <font-awesome-icon icon="lock" />
            </span>
            <input type="password" v-model="password" placeholder="Password">
        </div>
        <div class="cont">
            <span>
                <font-awesome-icon icon="lock" />
            </span>
            <input type="password" v-model="cPassword" placeholder="Confirm Password">
        </div>
        <div class="text">
            <router-link to="/login">Already have an account? <span>Sign In</span></router-link>
        </div>
        <button type="submit">Register</button>
        <button class="google-btn"><img :src="images.googleLogo" alt=""/> <span>Google</span> </button>
    </form>
  </div>
</template>

<script>
import {ref} from 'vue';
import { images } from '../assets/assets';

export default {
    name: 'login',
    setup(){
        const email = ref('')
        const username = ref('')
        const password = ref('')
        const cPassword = ref('')


        return{
            email,
            username,
            password,
            cPassword,
            images,
        }

    }
}
</script>

<style>
     .signup-container{
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
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 
                    0 1px 3px rgba(0, 0, 0, 0.06);
        font-family: Arial, sans-serif;
    }

    .signup-form:hover {
        box-shadow: 0 8px 10px rgba(0, 0, 0, 0.1), 
                    0 4px 6px rgba(0, 0, 0, 0.06);
    }

    .signup-form h1{
        font-size: 20px;
        font-weight: 600;
        text-align: center;
        color: var(--black);
        padding: 10px 0;

    }

    .signup-form .cont{
        display: flex;
        align-items: center;
        gap: 11px;
        width: 100%;
        border: 1px solid var(--black);
        border-radius: 5px;
        padding: 10px;
    }

    .signup-form .cont svg{
        font-size: 15px;
    }

    .signup-form input{
         width: 100%;
         font-size: 14px;
    }

    .signup-form button{
        background-color: var(--light-blue);
        color: var(--white);
        border-radius: 8px;
        padding: 10px 0;
        font-weight: 600;
    }

    .signup-form a{
        font-size: 15px;
    }

    .signup-form a span{
        color: var(--light-blue);
    }

    .signup-form button.google-btn{
        display: flex;
        align-items: center;
        gap: 5px;
        justify-content: center;
        background-color: rgba(235, 233, 233, 0.5); /* Darker background with opacity */
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

    .signup-form button.google-btn span{
        font-weight: 700;
    }

    .signup-form button img{
        width: 20px;
        height: 20px;
        
    }

    @media (max-width: 425px) {
        .signup-form{
            width: 90%;
        }
    }

</style>