<script setup lang="ts">
import { RouterLink, RouterView, useRoute } from 'vue-router'
import { listOfCocktails } from './model/cocktail';
import { computed } from 'vue';

const route = useRoute();
const notFound = computed(() => route.name == 'NotFound');
</script>

<template>
  <div class="sm:p-5 flex flex-row justify-center full">
  <nav class="border-1 border-black border-collapse lg:p-6 sm:p-0 md:p-2 min-w-[--min-nav-width] items-stretch">
    <ul class="list-none">
      <li v-for="cocktail in listOfCocktails">
        <RouterLink active-class="font-bold" :to="`/${cocktail}`">{{ cocktail }}</RouterLink>
      </li>
      <li>
        <RouterLink :class="{ ['font-bold']: notFound }" active-class="font-bold" :to="`/404-${listOfCocktails.join('')}`">404
        </RouterLink>
      </li>
    </ul>
  </nav>
  <div class="border-1 border-black border-collapse lg:p-6 sm:p-0 md:p-2 grow items-stretch min-w-[calc(var(--min-table-width)-var(--min-nav-width))] max-w-[calc(var(--max-table-width)-var(--min-nav-width))]">
    <RouterView />
  </div>
</div>
</template>
