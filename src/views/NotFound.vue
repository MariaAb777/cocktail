<template>
  <div class="notFound">
    <h1>404 Not Found</h1>
    <p>The page you are looking for does not exist.</p>
    <button @click="goHome">Go back</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import '@/assets/styles/notFoundStyles.scss'

export default defineComponent({
  setup() {
    const router = useRouter();

    const goHome = () => {
      router.push('/');
    };

    return {
      goHome,
    };
  },
});
</script>
