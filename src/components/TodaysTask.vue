<template>
  <div class="todays-task">
    
    <div class="info">
        <div class="title">
            <h3>Task Today</h3>

            <h3>...</h3>
        </div>
        <div class="image">
            <img :src="images.taskImageOne" alt="">
        </div>
        <div class="text">
            <div class="txt">
                <h2>Creating Mobile App Design</h2>
                <p>UI UX Design</p>
            </div>
            <div class="progress">
                <div class="progress-txt">
                    <p>Progress</p>
                    <b>90%</b>
                </div>
                <span style="--value: 90%" class="progress-bar"></span>
            </div>
            <div class="cont">
                <div class="time">
                    <font-awesome-icon :icon="['far', 'clock']"></font-awesome-icon>
                    <p>3 hour</p>
                </div>
                <div class="img">
                    <img :src="images.profileTwo" alt="">
                    <img :src="images.profileThree" alt="">
                    <img :src="images.profileFour" alt="">
                    <img :src="images.profileFive" alt="">
                    <img :src="images.profileSix" alt="">
                
                </div>
            </div>
        </div>
    </div>

    <!-- <hr>

    <div class="task-details">
        <div class="title">
            <h3>Detail Task</h3>
            <p>UI/UX Designer</p>
        </div>
        <div class="details">
            <div class="detail">
                <span>1</span>
                <p>Understanding the tools in Figma</p>
            </div>
            <div class="detail">
                <span>2</span>
                <p>Understand the basics of making designs</p>
            </div>
            <div class="detail">
                <span>3</span>
                <p>Design a mobile application with figma</p>
            </div>
        </div>
    </div> -->

    <button>Go to Details</button>
   
  </div>
  
</template>

<script>
import Card from './Card.vue';
import { images } from '../assets/assets';

export default {

    components:{
        Card
    },

    setup(){

        return{
            images,
        }
    }

}
</script>

<style>
    .todays-task{
        display: flex;
        flex-direction: column;
        min-width: 100%;
        /* height: 474px; */
        gap: 20px;
        border-radius: 10px;
        background-color: var(--white);
        padding: 20px;
    }

    .todays-task .info{
        display:flex;
        flex-direction: column;
        gap: 20px;
    }

    .todays-task .title{
        display: flex;
        justify-content: space-between;
        font-size: 14px;

    }

    .todays-task .details{
        display: flex;
        flex-direction: column;
    }

    .todays-task .details .detail{
        display: flex;
        font-size: 14px;
    }

    .todays-task .title h3{
        font-weight: 600;
    }

    .todays-task .image img{
        border-radius: 10px;
    }

    .todays-task .text{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 10px;
        height: 100%;
        width: 100%;
    }

    .todays-task .txt h2{
        font-size: 16px;
        font-weight: 600;
    }

    .todays-task .txt p{
        font-size: 12px;
        color: var(--gray-text-primary);
    }

    .todays-task .cont{
        display: flex;
        justify-content: space-between;
    }

    .todays-task .cont .time{
        display: flex;
        align-items: center;
        gap: 5px;
    }

    .todays-task .progress .progress-txt{
        display: flex;
        justify-content: space-between;
        font-size: 16px;
    }

    .todays-task .progress .progress-txt b{
        color: var(--light-blue);
        opacity: .7;
    }

    .todays-task .progress .progress-bar{
        position: relative;
        display: flex;
        width: 100%;
        height: 8px;
        background-color: #BAC8FF;
        border-radius: 5px;
        margin-top: 10px;
    }

    .todays-task .progress .progress-bar::before{
        content: '';
        position: absolute;
        width: var(--value);
        height: 100%;
        background-color: var(--light-blue);
        border-radius: 5px;

    }

    .todays-task .progress .progress-bar::after{
        content: '';
        position: absolute;
        width: 16px;
        height: 16px;
        top: -4px;
        left: calc(var(--value) - 16px);
        border: 2px solid var(--white);
        border-radius: 50%;
        background-color: var(--light-blue);
    }
    
    .todays-task .cont .img{
        display: flex;
    }

    .todays-task .cont .img img{
        width: 24px;
        height: 24px;
        border-radius: 50%;
        border: 1.5px solid var(--white);
        margin-left: -5px;
    }

    .todays-task button{
        width: 100%;
        background-color: var(--light-blue);
        color: var(--white);
        padding: 9px ;
        border-radius: 8px;
    }
</style>