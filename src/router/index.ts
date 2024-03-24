import { listOfCocktails, type cocktailType } from "@/model/cocktail";
import CocktailView from "@/views/CocktailView.vue";
import NotFound from "@/views/NotFound.vue";
import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";

function cocktailRoute(cocktailType: cocktailType): RouteRecordRaw {
  return {
    path:`/${cocktailType}`,
    component: CocktailView,
    props: { cocktailType },
  };
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: `/${listOfCocktails[0]}` },
    ...listOfCocktails.map(c=>cocktailRoute(c)),
    { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
  ],
});

export default router;
