<template>
    <nav>
        <router-link
          v-for="cocktail in cocktailCodes"
          :key="cocktail"
          :to="cocktail"
          active-class="active"
          class="cocktail-item"
        >
          {{ cocktail }}
        </router-link>
      </nav>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    props: {
      cocktailCodes: {
        type: Array as () => string[],
        required: true,
      },
    },
  });
  </script>