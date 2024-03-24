<script setup lang="ts">
import type { cocktail } from '@/model/cocktail';
import { useCocktailStore } from '@/stores/cocktailStore';
const { cocktail } = defineProps<{ cocktail: cocktail }>()
</script>

<template>
    <img class="float-right w-80" :src="cocktail.strDrinkThumb" />
        <div class="font-bold">{{ cocktail.strDrink }}</div>
        <div>
            <span v-for="text in [cocktail.strCategory, cocktail.strAlcoholic, cocktail.strGlass]"
                class="after:content-['_']">{{ text }}</span>
        </div>
        <div class="mt-4 text-sm">List of ingredients:</div>
        <div v-for="{name,measure} in cocktail.ingredients"><span class="font-bold">{{ name }}</span> {{measure}}</div>
</template>
