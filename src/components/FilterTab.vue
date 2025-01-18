<template>
  <div class="filter-tab">
    <div class="category">
        <img :src="images.filterCat" alt="">
        <span>Category</span>
    </div>
    <div class="filter">
        <img :src="images.sortIcon" alt="">
        <span>Sort By : Deadline</span>
    </div>
  </div>
</template>

<script>
import { images } from '../assets/assets';
export default {

    setup(){


        return{
            images,
        }
    }
}
</script>

<style scoped>
    .filter-tab{
        display: flex;
        gap: 24px;
        cursor: pointer;
    }

    .filter-tab div{
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