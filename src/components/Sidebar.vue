<template>
  <div class="side-bar">
    <li>
        <router-link to="#" class="active">
            <img :src="images.overviewIcon" alt="">
            <span>Overview</span>
        </router-link>
        <router-link to="#">
            <img :src="images.projectIcon" alt="">
            <span>Projects</span>
        </router-link>
        <router-link to="#">
            <font-awesome-icon :icon="['far', 'calendar-days']" />
            <span>Calendar</span>
        </router-link>
        <router-link to="#">
            <img :src="images.settingsIcon" alt="">
            <span>Settings </span>
        </router-link>
    </li>

    <div class="help-center">
       <span class="question-mark">?</span>
       <div class="container">
            <div class="text">
                <h2>Help Center</h2>
                <p>Having Trouble in Learning.
                    Please contact us for more questions.
                </p>
            </div>
            <button class="btn">
                Go To Help Center
            </button>
       </div>
    </div>
  </div>
</template>

<script>
 import { images } from '../assets/assets';
export default {
    setup(){
        

        return{
            images
        }
    }
}
</script>
    
<style scoped>
    .side-bar{
        position: fixed;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100vh;
        width: 232px;
        padding: 60px 20px;
        padding-bottom: 23px;
        background-color: var(--white);
        z-index: 3;
    }

    .side-bar li{
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .side-bar li a{
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 10px 20px;
        border-radius: 10px;
        transition: .3s ease;
    }

    .side-bar li a:hover,
    .side-bar li a.active {
        background-color: var(--light-gray-bg);
    }

    .side-bar li a.active img{
        filter: brightness(0) saturate(100%) invert(5%) sepia(7%) saturate(5515%) hue-rotate(199deg) brightness(92%) contrast(91%);
    }

    .side-bar li a svg{
        color: var(--gray-text-secondary);
        font-size: 22px;
    }

    .side-bar li a span{
        color: var(--gray-text-secondary);
        font-size: 14px;
        font-weight: 500;
    }

    .side-bar li a.active span,
    .side-bar li a.active svg{
        color: #141522;
    }

    .side-bar .help-center .container{
        position: relative; 
        width: 192px;
        display: flex;
        flex-direction: column;
        background-color: #141522;
        border-radius:10px;
        padding:20px 15px;
        padding-top: 40px;
        overflow: hidden;
    }

    .side-bar .help-center .container::before{
        content: '';
        position: absolute;
        width: 160px ;
        height: 160px;
        background-color: #FFFFFF14;
        border-radius: 50%;
        top: -46%;
        left: -46%;

    }

    .side-bar .help-center{
        position: relative;
    }

    .side-bar .help-center .container::after{
        content: '';
        position: absolute;
        width: 160px ;
        height: 160px;
        background-color: #FFFFFF14;
        border-radius: 50%;
        bottom: -46%;
        right: -46%;

    }

    .side-bar .question-mark{
        position:absolute;
        display: flex;
        left: 42%;
        top: -20px;
        align-items: center;
        justify-content: center;
        color: var(--white);
        height: 40px;
        width: 40px;
        font-size: 25px;
        font-weight: 600;
        background-color: #141522;
        border-radius: 50%;
        border: 2px solid var(--white);
        backdrop-filter: blur(24px);
        box-shadow: 0 4px 15px rgba(63, 63, 63, 0.638), /* Focused shadow at the top */
        0 8px 20px rgba(0, 0, 0, 0.263);
        z-index: 1;
    }

    .side-bar .help-center .container .text{
        display: flex;
        flex-direction: column;
        gap:10px;
        text-align:center;
        color: var(--white);
    }

    .side-bar .help-center .container .text h2{
        font-size: 16px;
        font-weight: 600;
        line-height: 24px;
        letter-spacing: -0.02em;
    }

    .side-bar .help-center .container .text p{
        font-size: 12px;
    }

    .side-bar .help-center .container .btn{
        background-color: var(--white);
        border-radius: 10px;
        font-size: 12px;
        padding: 10px 0;
        margin-top: 20px;
        font-weight: 500;
    }

    
</style>