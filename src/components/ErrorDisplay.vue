<template>
    <p v-show="modelValue" class="error">
      {{ error }} 
      <span @click="closeError">
        <font-awesome-icon icon="x"></font-awesome-icon>
      </span>
    </p>
  </template>
  
  <script>
  import { ref } from "vue";
  
  export default {
    props: ["error", "modelValue"], // Change "errorDisplay" to "modelValue"
    emits: ["update:modelValue"], // Emit "update:modelValue"
  
    setup(props, { emit }) {
      function closeError() {
        emit("update:modelValue", false); // Correct way to update v-model
      }

      return {
        closeError,
        
      };
    },
  };
  </script>
  
  <style scoped>
    .error{
        padding: 15px;
        border-radius: 5px;
        color: #fffffff5;
        background-color: rgba(246, 2, 2, 0.838);
        margin-top: 20px;
    }

     .error span{
        font-size: 11px;
        margin-left: 7px;
        cursor: pointer;
        border: 1px  #000;
        border: 1px solid #fffffff5;
        padding: 4px 7px;
        border-radius: 5px;
    }
  </style>
  