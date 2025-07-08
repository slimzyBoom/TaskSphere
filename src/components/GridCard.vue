<template>
    <router-link :to="{ name: 'project-details', params: { id: card.id } }">
      <div class="card ">
        <div class="image max-vsm:!min-h-[130px]">
          <!-- <img
            :src="card.image
              ? `${import.meta.env.VITE_API_BASE_URL}/${card.image}`
              : images.taskImageTwo"
            :alt="card.name"
          /> -->
          <img :src="card.image || images.taskImageTwo" alt="">
        </div>
        <div class="text">
          <div class="txt max-vsm:!text-sm ">
            <h2 class="line-clamp-1 max-vsm:!text-[14px]">{{ card.name }}</h2>
            <p class="line-clamp-1">{{ card.description }}</p>
          </div>
          <div class="progress">
            <div class="progress-txt max-vsm:!text-sm">
              <p>Progress</p>
              <b>{{ card.completion_percentage }}%</b>
            </div>
            <span
              class="progress-bar"
              :style="{ '--value': card.completion_percentage < 50 ? card.completion_percentage + 5 + '%' : card.completion_percentage + '%' }"
            ></span>
          </div>
          <div class="cont mt-2 max-vsm:!mt-0">
            <div class="time">
              <font-awesome-icon :icon="['far', 'clock']" class="max-vsm:!text-[12px] max-tny:!text-[10px]"/>
              <p class="text-sm max-vsm:!text-[12px]  max-vsm:!leading-3 max-tny:!text-[10px]">{{date}} </p>
            </div>
            <div class="img">
              <img
                v-for="collab in (card.collaborators || [])"
                :key="collab.id"
                :src="collab.avatarUrl"
                alt="avatar"
              />
            </div>
          </div>
        </div>
      </div>
    </router-link>
  </template>
  
<script setup>
  import { defineProps, computed } from 'vue'
  import { images } from '../assets/assets'
  import { formatDuration } from '@/utils/formatDuration.js' // update the path

  
  const props = defineProps({
    card: {
      type: Object,
      required: true
    },
    dateMessage: String,  
  })

  const date = formatDuration(props.card, props.dateMessage)
  

  console.log(date);
  

</script>
  
<style scoped>
    .card{
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 320px;
        gap: 20px;
        border-radius: 10px;
        background-color: var(--white);
        padding: 20px 15px;
        cursor: pointer;
        transition: .3s ease;
    }

    /* .card:hover{
        transform: scale(1.01);
    } */

    .card .image{
        width: 100%;
        min-height: 130px;
    }

    .card .image img{
        width: 100%;
        height: 100%;
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

    @media not all and (min-width: 380px) {
        .card .progress .progress-bar{
            height: 5px;        
        }

        .card .progress .progress-bar::after{ 
          left: calc(var(--value) - 12px);
          width: 12px;
          height: 12px;
        }
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