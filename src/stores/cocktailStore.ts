import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useCocktailStore = defineStore('cocktail', () => {
  const cocktails = ref<{ [key: string]: any[] }>({});
  const loading = ref(false);
  const error = ref<string | null>(null);

  async function fetchCocktail(cocktailCode: string) {
    loading.value = true;
    error.value = null;

    try {
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailCode}`);
      const data = await response.json();

      if (data.drinks) {
        cocktails.value[cocktailCode] = data.drinks;
      } else {
        cocktails.value[cocktailCode] = [];
      }
    } catch (err) {
      error.value = 'Failed to fetch cocktail data';
    } finally {
      loading.value = false;
    }
  }

  return {
    cocktails,
    loading,
    error,
    fetchCocktail,
  };
});
