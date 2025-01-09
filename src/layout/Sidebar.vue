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
        height: 100vh;
        width: 232px;
        padding: 60px 20px;
        background-color: var(--white);
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
    }

    .side-bar li a.active {
        background-color: var(--light-gray-bg);
    }

    .side-bar li a.active img{
        filter: brightness(0) saturate(100%) invert(5%) sepia(7%) saturate(5515%) hue-rotate(199deg) brightness(92%) contrast(91%);
    }

    .side-bar li a svg{
        color: #8E92BC;
        font-size: 22px;
    }

    .side-bar li a span{
        color: #8E92BC;
        font-size: 14px;
        font-weight: 500;
    }

    .side-bar li a.active span,
    .side-bar li a.active svg{
        color: #141522;
    }

    
</style>