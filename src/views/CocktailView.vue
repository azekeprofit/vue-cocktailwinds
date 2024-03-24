<script setup lang="ts">
import type { cocktail, cocktailType } from '@/model/cocktail';
import { useCocktailStore } from '@/stores/cocktailStore';
import Cocktail from '@/components/Cocktail.vue';
import { computed, ref, watch, type MaybeRefOrGetter, toValue, toRef } from 'vue';
const props = defineProps<{ cocktailType: cocktailType }>()

const loading = ref(false);
const cocktail = ref<cocktail | undefined>(undefined);

const { getCocktail, useCocktail } = useCocktailStore();

function loadCocktail(type: cocktailType) {
    loading.value = true;
    getCocktail(type).then(l => cocktail.value = l).finally(() => loading.value = false)
}

const type = computed(() => props.cocktailType);
// const {loading, cocktail}=useCocktail(type);
watch(type, loadCocktail, { immediate: true })
</script>

<template>
    <div v-if="loading">Loading...</div>
    <Cocktail v-if="cocktail" :cocktail />
</template>