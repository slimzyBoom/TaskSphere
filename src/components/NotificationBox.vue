<template>
  <div class="notification-box h-44 lg:h-32">
    <div :class="['icon', colour]">
        <font-awesome-icon icon="bell"></font-awesome-icon>
    </div>
    <div class="details">
        <h2>{{ notification.title }}</h2>
        <p>{{ notification.description }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
    notification: {
        type: Object,
        required: true
    },
    colour: {
        type: String,
        required: true
    }
})
</script>

<style scoped>
    .notification-box{
        display: flex;
        background-color: var(--white);
        border-radius: 10px;
        /* gap: 20px; */
        cursor: pointer;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 
                0 1px 3px rgba(0, 0, 0, 0.06);
    }

    .notification-box .icon{
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 25px;
        width: 200px;
        height: 100%;
        color: var(--white);
        /* background-color: red; */
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;

    }

    .notification-box .details{
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 10px 0px;
        gap: 2px;
        padding: 15px 20px;

    }

    .notification-box .details h2{
        font-size: 17px;
        font-weight: 600;
        color: var(--black);
    }

    .notification-box .details p{
        font-size: 13.5px;
        color: var(--gray-text-primary);
    }


</style>