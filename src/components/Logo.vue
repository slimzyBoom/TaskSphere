<template>
  <div class="logo">
    <img :src="images.logo" alt="">
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
    .logo{
        width: 200px;
        height: 50px;
    }

    .logo img{
        width: 100%;
        height: 100%;
    }
</style>