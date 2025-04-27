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
            640:  { slidesPerView: 1 },
            768:  { slidesPerView: 2 },
            1024: { slidesPerView: 2.5 }
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
  
  // 1️⃣ Import Swiper Vue components
  import { Swiper, SwiperSlide } from 'swiper/vue'
  // 2️⃣ Import only the core Navigation module
  import { Navigation } from 'swiper/modules';
  
  // 3️⃣ Import Swiper styles
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
  
  /* Optional: override Swiper arrow colors or positioning */
  .swiper-button-next,
  .swiper-button-prev {
    color: #333;
  }
  
  /* Ensure your slides have no extra padding/margin (if desired) */
  .swiper-slide {
    display: flex;
    /* justify-content: center; */
  }
  </style>
  