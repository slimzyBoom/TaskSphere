<template>
    <div class="md:flex gap-6 hidden">
      <div
        class="flex items-center border cursor-pointer border-slate-300 text-sm gap-3 py-2.5 px-5 rounded-lg"
      >
        <img :src="images.filterCat" alt="" />
        <span>Category</span>
      </div>
      <div
        class="flex items-center border border-slate-300 text-sm gap-3 py-2.5 px-5 rounded-lg"
      >
        <img :src="images.sortIcon" alt="" />
        <span>Sort By : Deadline</span>
      </div>
    </div>
    <div class="md:hidden">
        <img :src="images.linearSort" alt="liear sorting" class="flex items-center border border-slate-300 text-xl font-light md:hidden gap-3 py-2.5 px-5 rounded-lg"/>
        <!-- <font-awesome-icon :icon="['fas', 'sort']" class="flex items-center border border-slate-300 text-xl font-light md:hidden gap-3 py-2.5 px-5 rounded-lg"/> -->
    </div>
</template>

<script>
import { images } from "../assets/assets";
export default {
  setup() {
    return {
      images,
    };
  },
};
</script>

<style scoped>
.filter-tab {
  display: flex;
  gap: 24px;
  cursor: pointer;
}

.filter-tab div {
  display: flex;
  align-items: center;
  border: 1px solid #eaeaea;
  font-size: 13px;
  gap: 12px;
  color: var(--black);
  padding: 10px 20px;
  border-radius: 10px;
}
</style>
