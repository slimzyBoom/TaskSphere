<template>
  <div class="notifications">
    <div class="title">
        <h1>
            Notifications
        </h1>
        
    </div>
    <div class="notifications-container">
        <NotificationBox v-for="n in 10" :key="n"/>
    </div>
    
  </div>
</template>

<script>
import NotificationBox from '../components/NotificationBox.vue';
export default {
    components:{
        NotificationBox,
    },

    setup(){

    }
}
</script>

<style scoped>
    .notifications{
        min-height: 100vh;
        width: 100%;
        padding: 30px;
        background-color: var(--light-gray-bg) ;

    }

    .notifications .title{
        font-size: 30px;
        font-weight: 600;
        margin-bottom: 30px;
    }

    .notifications-container{
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 30px;

    }
</style>