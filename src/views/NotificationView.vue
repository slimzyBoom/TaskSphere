<template>
  <div class="notifications">
    <Header :header-props="headerProps"></Header>
    <div class="notifications-container">
        <NotificationBox v-for="n in 10" :key="n"/>
    </div>

  </div>
</template>

<script>
import Header from '../components/Header.vue';
import NotificationBox from '../components/NotificationBox.vue';
export default {
    components:{
        NotificationBox,
        Header,
    },

    setup(){
        const headerProps = {
            title :  'Notifications',
            titleText: null,
            search : false,
            filter: false,
            icons: true,
            button: false,
        }

        return{
            headerProps,
        }
    }
}
</script>

<style scoped>
    .notifications{
        min-height: 100vh;
        width: 100%;
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
        padding: 30px;

    }
</style>