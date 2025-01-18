<template>
  <div ref="dashboard" class="card-container">
    <div class="header">
        <h1>{{ containerData.title }}</h1>
        <span class="arrows">
            <p @click="previous" class="arrow-right">&ltcc;</p>

            <p @click="next" class="arrow-right">&gtcc;</p>
        </span>
    </div>
    <div class="content" >
        <div class="slider" >
           <div class="slides" :style="{ transform: `translateX(-${(currentIndex * 100)}%)` }">
                <Card v-for="n in cardLimit" :key="n">

                </Card>
           </div>
        </div>
       
    </div>
  </div>
</template>

<script>
import Card from './Card.vue';
import { ref , onMounted} from 'vue';
export default {
    props : ['containerData'],
    components : {
        Card
    },

    setup(){
        const currentIndex = ref(0) 
        const cardLimit = ref(10)
        const dashboard = ref(null);
        
        const dashboardWidth = ref(0);
        const slidesPerPage = ref(1);
        const scrollLimit = ref(0);

        onMounted(() => {
            if (dashboard.value) {
                dashboardWidth.value = dashboard.value.offsetWidth;
                slidesPerPage.value = dashboardWidth.value / 338;
                scrollLimit.value = Math.round(cardLimit.value / slidesPerPage.value) * 1;
                
            }

        });
       
        function next() {
            if (currentIndex.value < scrollLimit.value) {
                currentIndex.value = (currentIndex.value + 1) % scrollLimit.value
               
            }
            
            
        }

        function previous() {
            if (currentIndex.value > 0) {
                currentIndex.value = (currentIndex.value - 1 + scrollLimit.value) % scrollLimit.value;
                
            }
           

        }

        return{
            cardLimit,
            currentIndex,
            dashboard,
            next,
            previous,
        }
        
    }

}
</script>

<style scoped>
    .card-container{
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .card-container .header{
        display: flex;
        justify-content: space-between;
    }

    .card-container .header h1{
        font-size: 24px;
        font-weight: 600;
    }

    .card-container .header .arrows{
        display: flex;
        gap: 20px;
    }

    .card-container .header .arrows p{
        font-size: 34px;
        font-weight: 10;
        cursor: pointer;
    }

    .card-container .content{
        display: flex;
        width: 100%;
        height: 100%;
        gap: 30px;
        overflow: scroll;
       
    }

    .card-container .content::-webkit-scrollbar{
        display: none;
    }

    .slider {
       
        width: 100%;
        height: 100%;
    }

    .slides {
        display: flex;
        gap: 30px;
        transition: transform 0.5s ease-in-out;
      
    }


</style>