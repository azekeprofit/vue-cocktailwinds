<script setup lang="ts">
import type { ingredient } from '@/model/cocktail';
const { ingredient } = defineProps<{ ingredient: ingredient }>()
</script>

<template>
    <div><span class="font-bold">{{ ingredient.name }}</span> {{ingredient.measure}}</div>
</template>