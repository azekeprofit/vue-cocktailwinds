import { ref, type MaybeRefOrGetter, toValue } from "vue";
import { defineStore } from "pinia";
import {
  type cocktailType,
  type cocktail,
  type searchResultApi,
  convertCocktail,
} from "@/model/cocktail";

const cache = new Map<cocktailType, cocktail>();

export const useCocktailStore = defineStore("cocktails", () => {  
    async function fetchCocktail(type:cocktailType) {
      const searchResult = await (
        await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${type}`
        )
      ).json() as searchResultApi;
  
      const found=searchResult?.drinks?.filter(d=>d.strDrink===type)?.[0];
      return found?convertCocktail(found):Promise.reject('not found');
    }

  async function getCocktail(type: cocktailType) {
    if (cache.has(type)) return Promise.resolve(cache.get(type));
      const c = await fetchCocktail(type);
      cache.set(type, c);
      return c;
  }

  function useCocktail(typeRef:MaybeRefOrGetter<cocktailType>){
    const type=toValue(typeRef);
    const loading = ref(true);
    const cocktail = ref<cocktail|undefined>(undefined);
    getCocktail(type).then(l=>cocktail.value=l).finally(()=>loading.value=false);
    return { loading, cocktail }
  }

  return { cache, fetchCocktail, getCocktail, useCocktail };
});
