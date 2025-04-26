<template>
  <div class="welcome-message">
    <h1 v-if="headerProps.title">{{headerProps.title}}</h1>
     <p v-if="headerProps.titleText">{{headerProps.titleText }}</p>
  </div>
  
</template>

<script>
export default {
    props: ['headerProps'],
}
</script>

<style scoped>
    .welcome-message h1{
        font-size: 22px;
        font-weight: 600;
        color: var(--black);
    }

    .welcome-message p{
        font-size: 15px;
        color: var(--gray-text-primary);
    }
</style>