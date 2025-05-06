<template>
    <div class="card-container">
      <div class="header">
        <h1>{{ containerData.title }}</h1>
      </div>
      <div class="flex items-center h-full min-h-[200px] justify-center">
        <div v-if="loading">Loading... </div>

        <div v-else-if=" cardsToShow.length === 0" class="empty h-full flex flex-col gap-1 items-center">
            <img :src="images.emptyFolder" alt="Empty" class="w-[140px] mx-auto" />
            <p class="text-center mt-2 text-gray-500">No {{ containerData.title.toLowerCase() }}</p>
        </div>

        <Swiper
            v-else
            :modules="[Navigation]"
            navigation
            :space-between="20"
            :breakpoints="{
            0:  { slidesPerView: 1},
            420:  { slidesPerView: 1.4 },
            520:  { slidesPerView: 1.7 },
            640:  { slidesPerView: 2 },
            // 1024: { slidesPerView: 2 },
            // 1124: { slidesPerView: 2.1 },
            700: { slidesPerView: 2.2 },
            760: { slidesPerView: 2.5 },
            850:  { slidesPerView: 2.8},
            1024: { slidesPerView: 2 },
            1124: { slidesPerView: 2.1 },
            1180: { slidesPerView: 2.3 },
            1350: { slidesPerView: 2.5 }
            }"
        >
            <SwiperSlide
            v-for="card in cardsToShow"
            :key="card.id"
            >
            <Card :card="card" :dateMessage="containerData.dateMessage"/>
            </SwiperSlide>
        </Swiper>
      </div>
      
    </div>
  </template>
  
  <script setup>
  import { defineProps, computed, onMounted } from 'vue'
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import { Navigation } from 'swiper/modules';
  
  import 'swiper/css'
  import 'swiper/css/navigation'
  
  import Card from './Card.vue'
import { useUnwrappedArray } from '@/composables/useUnwrappedArray';
import { images } from '@/assets/assets';
  
  const props = defineProps({
    containerData: {
      type: Object,
      required: true,
      // expects shape { title: String, cards: Array }
    },
    loading: { type: Boolean, default: false },
  })

    const cardsToShow = useUnwrappedArray(props.containerData.cards)
    

  </script>
  
  <style scoped>
  .card-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
    /* min-height: 250px; */
  }
  
  .card-container .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .card-container .header h1 {
    font-size: 24px;
    font-weight: 600;
  }

  .swiper{
    width: 100%;
  }
  
  .swiper-button-next,
  .swiper-button-prev {
    color: #333;
  }
  
  .swiper-slide {
    display: flex;
    justify-content: center;
  }
  </style>
  
