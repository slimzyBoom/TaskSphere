<template>
  <div class="projects-tab">
    
        <CardContainer :containerData="timeLimit" :loading="loading"/>
        <CardContainer :containerData="newTask" :loading="loading"/>

    
  </div>
</template>

<script setup>
    import { reactive, watch } from 'vue'
    import CardContainer from './CardContainer.vue'

    const props = defineProps({
        data: { type: Array, required: true },
        loading: { type: Boolean, default: false }
    })

    const timeLimit = reactive({ title: 'Time Limit', cards: props.data })
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