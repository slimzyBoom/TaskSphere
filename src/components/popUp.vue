<template>
  <article
    class="p-4 w-11/12 mx-auto md:w-2/5 fixed text-center top-4 right-0 transform -translate-x-1/2 flex justify-between items-center rounded-md"
    :class="{
      'bg-red-200 text-red-900': !success,
      'bg-blue-200 text-blue-900': success,
    }"
  >
    <p class="text-sm">{{ content }}</p>
    <font-awesome-icon
      :icon="['fas', 'circle-xmark']"
      class="cursor-pointer"
      @click="handleClose"
    />
  </article>
</template>

<script setup>
defineProps({
  "is-active": Boolean,
  content: String,
  success: Boolean,
});
const timeout = () => {
  setTimeout(() => {
    emit("close");
  }, 3000);
};
const emit = defineEmits(["close"]);
const handleClose = () => {
  emit("close");
};
timeout();
</script>
