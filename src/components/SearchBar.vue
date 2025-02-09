<template>
    <div class="search-bar w-3/4 md:max-w-xs">
      <input type="text" placeholder="Search Task">
      <font-awesome-icon icon="search"/>
    </div>
  </template>
  
  <script>
  export default {
  
  }
  </script>
  
  <style scoped>
      .search-bar{
        position: relative;
        display: flex;
        /* width: 40%; */
        align-items: center;
      }
  
      .search-bar input{
        width: 100%;
        border: 1px solid #eaeaea;
        padding: 12px 15px;
        color: var(--gray-text-primary);
        font-size: 13px;
        border-radius: 10px;
        padding-right: 30px;
      }

      .search-bar svg{
        color: var(--gray-text-secondary);
        position: absolute;
        right: 12px;
      }
  </style>