<template>
  <div class="projects-tab max-vsm:!px-[20px]">
        <GridCardContainer :containerData="timeLimit" :loading="loading"/>
        <!-- <CardContainer /> -->
        <CardContainer :containerData="newTask" :loading="loading"/>

    
  </div>
</template>

<script setup>
    import CardContainer from './CardContainer.vue';
    import { reactive, watch } from 'vue'
    import GridCardContainer from './GridCardContainer.vue';


    const props = defineProps({
        data: { type: Array, required: true },
        loading: { type: Boolean, default: false }
    })

    const timeLimit = reactive({ title : 'Time Limit', cards: props.data, dateMessage: 'Starts' })
    const newTask   = reactive({ title: 'New Task', cards: props.data, dateMessage: 'Starts' })

    watch(
    () => props.data,
    (list) => {
        timeLimit.cards = list
        newTask.cards   = list
    },
    { immediate: true }
    )


</script>

<style scoped>
    .projects-tab{
        display: flex;
        flex-direction: column;
        gap: 50px;
        padding: 35px 30px;
    }
</style>