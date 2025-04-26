<template>
  <div class="relative flex">
    <Sidebar></Sidebar>
    <div class="w-full pl-0 lg:pl-[232px]">
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