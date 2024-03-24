export const listOfCocktails = ["Margarita", "Mojito", "A1", "Kir"] as const;

export type cocktailType = (typeof listOfCocktails)[number];

interface cocktailBase {
  strDrink: cocktailType;
  strCategory: string;
  strAlcoholic: string;
  strGlass: string;
  strDrinkThumb: string;
}

export interface searchResultApi {
  drinks: cocktailApi[];
}

export const ingredientMinIndex = 1;
export const ingredientMaxIndex = 15;

export interface cocktailApi extends cocktailBase {
  strIngredient1: string;
  strIngredient2: string;
  strIngredient3: string;
  strIngredient4: string;
  strIngredient5: string;
  strIngredient6: string;
  strIngredient7: string;
  strIngredient8: string;
  strIngredient9: string;
  strIngredient10: string;
  strIngredient11: string;
  strIngredient12: string;
  strIngredient13: string;
  strIngredient14: string;
  strIngredient15: string;

  strMeasure1: string;
  strMeasure2: string;
  strMeasure3: string;
  strMeasure4: string;
  strMeasure5: string;
  strMeasure6: string;
  strMeasure7: string;
  strMeasure8: string;
  strMeasure9: string;
  strMeasure10: string;
  strMeasure11: string;
  strMeasure12: string;
  strMeasure13: string;
  strMeasure14: string;
  strMeasure15: string;
}

export interface cocktail extends cocktailBase {
  ingredients: ingredient[];
}

export interface ingredient {
  name: string;
  measure: string;
}

export function convertCocktail(api: cocktailApi): cocktail {
  const any = api as any;
  const ingredients: ingredient[] = [];
  for (var i = ingredientMinIndex; i <= ingredientMaxIndex; i++) {
    const name = any[`strIngredient${i}`];
    if (name)
      ingredients.push({
        name,
        measure: any[`strMeasure${i}`],
      });
    else break;
  }

  return { ...api, ingredients };
}
