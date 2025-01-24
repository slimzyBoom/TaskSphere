<template>
    <div class="notification-toggle">
        <div class="toggler" @click="toggleActive()">
            <span :class="{active : active}"></span>
        </div>
        <h3>{{ notification }}</h3>
    </div>
  
</template>

<script>
import { ref } from 'vue';

export default {
    props: ['notification'],

    setup(){
        const active = ref(false)

        function toggleActive() {
            active.value = !active.value
        }

        return{
            active,
            toggleActive,
        }
    }

}
</script>

<style scoped>
    .notification-toggle{
        display: flex;
        gap: 20px;
        align-items: center;
        font-weight: 500;
    }

    .notification-toggle .toggler{
        display: flex;
        align-items: center;
        width: 60px;
        height: 35px;
        border-radius: 20px;
        border: 1px solid #ccc;
        padding: 2.5px;
        cursor: pointer;
    }

    .notification-toggle .toggler span{
        position: relative;
        left: 0;
        width: 30px;
        height: 30px;
        background-color: #efefefeb;
        border-radius: 50%;
        transition: .3s ease;
    }

    .notification-toggle .toggler span.active{
        left: calc(100% - 30px);
        background-color: var(--light-blue);

    }
</style>