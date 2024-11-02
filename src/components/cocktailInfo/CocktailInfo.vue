<template>
    <div class="cocktail-info">
      <div class="cocktail-details">
        <p><strong>Category:</strong> {{ cocktail.strCategory }}</p>
        <p><strong>Alcoholic:</strong> {{ cocktail.strAlcoholic }}</p>
        <p><strong>Glass:</strong> {{ cocktail.strGlass }}</p>
        <p><strong>Instructions:</strong> {{ cocktail.strInstructions }}</p>
      </div>
      <img
        :src="cocktail.strDrinkThumb"
        loading="lazy"
        @load="$emit('load')"
        @error="$emit('error')"
        class="cocktail-image"
      />
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, PropType } from 'vue';
  
  export default defineComponent({
    props: {
      cocktail: {
        type: Object as PropType<Record<string, any>>,
        required: true,
      },
    },
  });
  </script>
  