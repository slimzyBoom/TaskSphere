<template>
  <div class="auth-layout">
    <Sidebar></Sidebar>
    <div class="content">
        <router-view/>
    </div>
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue';


export default {
    components:{
        Sidebar,
    }
}
</script>

<style>
    .auth-layout{
        position: relative;
        display: flex;
    }

    .auth-layout .content{
        width: 100%;        
    }
</style>