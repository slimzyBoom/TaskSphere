<template>
   <div :style="dynamicStyle" className="container flex items-center absolute justify-center w-full bg-white z-10">
      <div
        className="inline-block h-16 w-16 animate-spin rounded-full border-8 border-solid border-current border-e-transparent align-[-0.125em] text-[#BAC8FF]"
        role="status"
      >
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Loading...
        </span>
      </div>
    </div>
</template>

<script setup>
   import { computed } from 'vue'

    const props = defineProps({
    occupiedHeight: {
        type: String, 
        required: true,
    },
    })

    const dynamicStyle = computed(() => ({
    height: `calc(90% - ${props.occupiedHeight})`,
    }))
</script>

<style scoped>
 .container{
    background-color: var(--light-gray-bg);
 }

</style>