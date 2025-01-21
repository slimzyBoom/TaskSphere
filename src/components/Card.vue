<template>
  <div class="card">
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
</template>

<script>
import { images } from '../assets/assets'

export default {
    
    setup(){

        return{
            images,
        }
    }
}
</script>

<style scoped>
    .card{
        display: flex;
        flex-direction: column;
        min-width: 328px;
        height: 314px;
        gap: 20px;
        border-radius: 10px;
        background-color: var(--white);
        padding: 24px;
        cursor: pointer;
        transition: .3s ease;
    }

    /* .card:hover{
        transform: scale(1.01);
    } */

    .card .image img{
        border-radius: 10px;
    }

    .card .text{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
        width: 100%;
    }

    .card .txt h2{
        font-size: 16px;
        font-weight: 600;
    }

    .card .txt p{
        font-size: 12px;
        color: var(--gray-text-primary);
    }

    .card .cont{
        display: flex;
        justify-content: space-between;
    }

    .card .cont .time{
        display: flex;
        align-items: center;
        gap: 5px;
        font-size: 16px;
    }

    .card .progress .progress-txt{
        display: flex;
        justify-content: space-between;
        font-size: 16px;
    }

    .card .progress .progress-txt b{
        color: var(--light-blue);
        opacity: .7;
    }

    .card .progress .progress-bar{
        position: relative;
        display: flex;
        width: 100%;
        height: 8px;
        background-color: #BAC8FF;
        border-radius: 5px;
        margin-top: 10px;
    }

    .card .progress .progress-bar::before{
        content: '';
        position: absolute;
        width: var(--value);
        height: 100%;
        background-color: var(--light-blue);
        border-radius: 5px;

    }

    .card .progress .progress-bar::after{
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
    
    .card .cont .img{
        display: flex;
    }

    .card .cont .img img{
        width: 24px;
        height: 24px;
        border-radius: 50%;
        border: 1.5px solid var(--white);
        margin-left: -5px;
    }

</style>