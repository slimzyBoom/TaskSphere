<script>
   
   
</script>

<template>
    <div>
        
        <router-view/>
    </div>
 
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap');

:root{
    --font-family: "Plus Jakarta Sans", serif;
    --black : #141522;
    --white : #fff;
    --light-blue : #546FFF;
    --light-gray-bg: #fafafa;
    --dark-gray-bg: #f5f5f7;
    --gray-text-primary : #54577A;
    --gray-text-secondary : #8E92BC;
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    outline: none;
    list-style: none;
    font-family: var(--font-family);
    scroll-behavior: smooth;
}

.swiper-button-prev:after, .swiper-button-next:after {
    font-family: swiper-icons;
    font-size: 36px;
}

</style>


