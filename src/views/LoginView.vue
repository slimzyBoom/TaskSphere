<template>
  <div class="login-container">
    <ErrorDisplay :error="error" v-model="errorDisplay"/>

    <form class="login-form" @submit.prevent="handleLogin">
        <h1>SIGN IN</h1>
        <div class="cont">
            <span>
                <font-awesome-icon icon="envelope" />
            </span>
           <input type="email" v-model="form.email" placeholder="Email"> 
        </div>
        <div class="cont">
            <span>
                <font-awesome-icon icon="lock" />
            </span>
            <input type="password" v-model="form.password" placeholder="Password">
        </div>
        <div class="text">
            <router-link to="/">Forgot Password?</router-link>
            <br>
            <router-link to="/signup">Don't have an account? <span>Sign Up</span></router-link>
        </div>
        <button type="submit">Login</button>
        <button class="google-btn"><img :src="images.googleLogo" alt=""/> <span>Google</span> </button>
    </form>
  </div>
</template>

<script>
import {reactive, ref, toRaw} from 'vue';
import { useRouter } from 'vue-router';
import { images } from '../assets/assets';
import ErrorDisplay from '../components/ErrorDisplay.vue';
import { loginUser } from '../api';


export default {
    name: 'login',
    components:{
        ErrorDisplay
    },
    setup(){
        const router = useRouter()
        const form = reactive({
            email:"",
            password:"",
        })
       
        const error = ref(null)
        const errorDisplay = ref(false)

        const handleLogin = async () =>{
            try {
                errorDisplay.value = false
                const formData = toRaw(form);
                console.log("Sending request with data:", formData);
                
                const response = await loginUser({...formData})
                console.log("Login Succesful!", response)

                const fakeToken = formData.email + "6578"
                localStorage.setItem("authToken", fakeToken);
                console.log("authToken:", fakeToken);
                

                router.push("/app/")
            } catch (err) {
                const cleanMessage = err.message.split(" (")[0];
                error.value = cleanMessage;
                errorDisplay.value = true
                console.log(err);
            }
        }
        // async function login() {
        //     try {
        //         const res = await fetch("http://localhost:5000/login", {
        //             method: "POST",
        //             headers: { "Content-Type": "application/json" },
        //             body: JSON.stringify({ username: this.username, password: this.password }),
        //         });

        //         const data = await res.json();

        //         if (res.ok) {
        //             localStorage.setItem("token", data.token);
        //             router.push({name: 'dashboard'});
                   
        //         } else{
        //             error.value= 'Invalid username or password'
        //             errorDisplay.value = true
        //         }

        //         // if (username.value == 'admin' && password.value == 'admin') {
        //         // const token = 'fake-token-48u4238vf8uh8'
        //         // localStorage.setItem('authToken',token)
                
        //         // }
                
        //     } catch (error) {
        //         console.error("Error logging in:", error);
        //     }
            
           
        // }


        return{
            form,
            error,
            handleLogin,
            // closeError,
            errorDisplay,
            images
        }

    }
}
</script>

<style scoped>
    .login-container{
        display: flex;
        flex-direction: column;
        gap: 20px;
        align-items: center;
        justify-content: center;
        width: 100vw;
        height: 90vh;
    }

   

    .login-form {
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

    .login-form:hover {
        box-shadow: 0 8px 10px rgba(0, 0, 0, 0.1), 
                    0 4px 6px rgba(0, 0, 0, 0.06);
    }

    .login-form h1{
        font-size: 20px;
        font-weight: 600;
        text-align: center;
        color: var(--black);
        padding: 15px 0;

    }

    .login-form .cont{
        display: flex;
        align-items: center;
        gap: 11px;
        width: 100%;
        border: 1px solid var(--black);
        border-radius: 5px;
        padding: 10px;
    }

    .login-form .cont svg{
        font-size: 15px;
    }

    .login-form input{
         width: 100%;
         font-size: 14px;
    }

    .login-form button{
        background-color: var(--light-blue);
        color: var(--white);
        border-radius: 8px;
        padding: 10px 0;
        font-weight: 600;
    }

    .login-form a{
        font-size: 15px;
    }

    .login-form a span{
        color: var(--light-blue);
    }

    .login-form button.google-btn{
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

    .login-form button.google-btn span{
        font-weight: 700;
    }

    .login-form button img{
        width: 20px;
        height: 20px;
        
    }

    @media (max-width: 425px) {
        .login-form{
            width: 90%;
        }
    }

</style>