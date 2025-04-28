<template>
    <div class="card-container">
      <div class="header">
        <h1>{{ containerData.title }}</h1>
      </div>
      <div class="flex items-center h-full min-h-[320px] justify-center">
        <div v-if="loading">Loading... </div>

        <div v-else-if=" cardsToShow.length === 0" class="empty h-full flex flex-col gap-1 items-center">
            <img :src="images.emptyFolder" alt="Empty" class="w-[140px] mx-auto" />
            <p class="text-center mt-2 text-gray-500">No {{ containerData.title.toLowerCase() }}</p>
        </div>

        <div v-else class="grid grid-cols-2 w-full sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 justify-between gap-10 max-sm:gap-5 max-tny:gap-4 lg:gap-5 xl:gap-10">
            <div v-for="card in cardsToShow" :key="card.id" >
                <GridCard :card="card" :dateMessage="containerData.dateMessage"/>
            </div>
        </div>

            
           
      </div>
      
    </div>
  </template>
  
<script setup>
    import { defineProps, computed, onMounted } from 'vue'
    
    import Card from './Card.vue'
    import GridCard from './GridCard.vue'
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
    /* justify-content: center; */
  }
  </style>
  
