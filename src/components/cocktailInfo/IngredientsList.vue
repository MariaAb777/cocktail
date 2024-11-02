<template>
    <div class="ingredients-list">
      <h3>List of Ingredients:</h3>
      <ul>
        <li v-for="(ingredient, index) in ingredients" :key="index">
          {{ ingredient.measure }} {{ ingredient.name }}
        </li>
      </ul>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, PropType } from 'vue';
  
  export default defineComponent({
    props: {
      ingredients: {
        type: Array as PropType<{ measure: string; name: string }[]>,
        required: true,
      },
    },
  });
  </script>
  