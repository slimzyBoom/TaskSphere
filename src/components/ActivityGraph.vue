<template>
  <div class="flex flex-col justify-between gap-4 bg-slate-200 p-5 rounded-xl w-full lg:w-2/3 ">
    <div class="flex justify-between items-center">
        <h2 class="text-sm">Activity</h2>
        <span class="text-xs flex gap-1.5 items-center">
            <p>This Week</p>
            <font-awesome-icon :icon="['fas', 'chevron-down']" />
        </span>
    </div>
    <div class="w">
        <img class="w-full" :src="images.activity"/>
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

<!-- <style scoped>
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
</style> -->