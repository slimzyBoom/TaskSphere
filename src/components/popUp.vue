<template>
  <div className="px-2 w-auto h-auto fixed top-4 right-0 z-40 ">
    <article
      class="max-vsm:p-2 p-4 text-center flex gap-1 justify-between rounded-md"
      :class="{
        'bg-red-200 text-red-900': !success,
        'bg-blue-200 text-blue-900': success,
      }"
    >
      <p class="text-sm max-tny:text-[13px]">{{ content }}</p>
      <font-awesome-icon
        :icon="['fas', 'circle-xmark']"
        class="cursor-pointer"
        @click="handleClose"
    />
  </article>
  </div>
 
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
  }, 5000);
};
const emit = defineEmits(["close"]);
const handleClose = () => {
  emit("close");
};
timeout();
</script>
