<script setup lang="ts">
import type { cocktail } from '@/model/cocktail';
import Ingredient from '@/components/Ingredient.vue';
const { cocktail } = defineProps<{ cocktail: cocktail }>();
</script>

<template>
    <img class="float-right w-80" :src="cocktail.strDrinkThumb" />
        <div class="font-bold">{{ cocktail.strDrink }}</div>
        <div>
            <span class="after:content-['_']">{{ cocktail.strCategory }}</span>
            <span class="after:content-['_']">{{ cocktail.strAlcoholic }}</span>
            <span class="after:content-['_']">{{ cocktail.strGlass }}</span>
        </div>
        <div class="mt-4 text-sm">List of ingredients:</div>
        <Ingredient v-for="ingredient in cocktail.ingredients" :ingredient />
</template>
