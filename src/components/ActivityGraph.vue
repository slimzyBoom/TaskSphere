<template>
  <div class="box">
    <div class="text">
        <h2>Activity</h2>
        <span>
            <p>This Week</p>
            <p>></p>
        </span>
    </div>
    <div class="image">
        <img :src="images.activity"/>
    </div>
  </div>
  
</template>

<script>
import { images } from '../assets/assets';

export default {
    setup(){


        return{
            images,
        }
    }
}
</script>

<style scoped>
    .box{
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        /* width: 100%; */
        width: 462px;
        height: 214px;
        background-color: var(--dark-gray-bg);
        border-radius: 10px;
        padding: 20px 20px;
    }

    .box .text{
        display: flex;
        justify-content: space-between;
    }

    .box .text h2{
        font-size: 16px;
        font-weight: 600;
    }

    .box .text span{
        display: flex;
        gap: 10px;
        font-size: 13px;
    }
</style>