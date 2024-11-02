<template>
  <div class="cocktail-detail">
    <LoadingSpinner v-if="loading" />
    <div v-else-if="error" class="error-text">{{ error }}</div>
    <div v-if="cocktail">
      <h2>{{ cocktail.strDrink }}</h2>
      <CocktailInfo :cocktail="cocktail" @load="onLoad" @error="onError" />
      <IngredientsList :ingredients="ingredients" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, onMounted, ref, watch } from 'vue';
import { useCocktailStore } from '@/stores/cocktailStore';
import CocktailInfo from '@/components/cocktailInfo/CocktailInfo.vue';
import IngredientsList from '@/components/cocktailInfo/IngredientsList.vue';
import LoadingSpinner from '@/components/loading/LoadingSpinner.vue';
import '@/assets/styles/cocktailDetailsStyle.scss';

export default defineComponent({
  components: {
    CocktailInfo,
    IngredientsList,
    LoadingSpinner,
  },
  props: {
    cocktailCode: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const store = useCocktailStore();
    const loading = ref(true);
    const error = ref('');

    const fetchCocktailData = async () => {
      loading.value = true;
      error.value = '';

      try {
        if (!store.cocktails[props.cocktailCode]) {
          await store.fetchCocktail(props.cocktailCode);
        }
      } catch (err) {
        error.value = 'Failed to fetch cocktail details';
      } finally {
        loading.value = false;
      }
    };

    onMounted(fetchCocktailData);

    watch(
      () => props.cocktailCode,
      fetchCocktailData
    );

    const cocktail = computed(() => store.cocktails[props.cocktailCode]?.[0]);

    const ingredients = computed(() => {
      const ingredientList = [];
      for (let i = 1; i <= 15; i++) {
        const measure = cocktail.value[`strMeasure${i}`];
        const ingredientName = cocktail.value[`strIngredient${i}`];
        if (measure && ingredientName) {
          ingredientList.push({ measure, name: ingredientName });
        }
      }
      return ingredientList;
    });

    const onLoad = () => {
      loading.value = false;
    };

    const onError = () => {
      error.value = 'Error loading cocktail image.';
      loading.value = false;
    };

    return {
      cocktail,
      loading,
      error,
      ingredients,
      onLoad,
      onError,
    };
  },
});
</script>
