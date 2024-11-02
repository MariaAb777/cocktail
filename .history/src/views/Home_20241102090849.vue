<template>
  <div class="container">
    <div v-if="!isNotFound" class="cocktail-list">
    <CoctailList :cocktailCodes="cocktailCodes" />
    </div>
    <div class="cocktail-details">
      <div class="details-frame">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useRoute } from 'vue-router';
import CoctailList from '@/components/coctailInfo/CoctailList.vue'
import '@/assets/styles/homePageStyles.scss'

export default defineComponent({
  components: {
    CoctailList
  },
  setup() {
    const route = useRoute();
    const cocktailCodes = ['margarita', 'mojito', 'a1', 'kir'];

    const isNotFound = computed(() => {
      return route.name === 'NotFound';
    });

    return {
      cocktailCodes,
      isNotFound,
    };
  },
});
</script>