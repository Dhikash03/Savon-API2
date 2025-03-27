import { Recette } from "./recette";
import { Ingredients } from "./Ingredients";


export class LigneIngredient {
    ligneIngredientId:number |null = null;
    quantite: number = 0;
    pourcentage: number = 0;
    ingredients: Ingredients|null = null;
    recette:  Recette|null  = null;
  }
  