import { LigneIngredient } from "./ligneIngredient";

export class Ingredients {
    id: number | null = null;
    nom: string = '';
    iode: number = 0;
    ins: number = 0;
    sapo: number = 0;
    volMousse: number = 0;
    tenueMousse: number = 0;
    douceur:number = 0;
    lavant:number = 0;
    durete:number = 0;
    solubilite:number = 0;
    sechage:number = 0;
    estCorpsGras:boolean = true;
    ligneIngredients: LigneIngredient[] = [];
  }

  export const DEFAULT_INGREDIENT: Ingredients = {
    id: null,
    nom: '',
    sapo: 0,
    ins: 0,
    iode: 0,
    lavant: 0,
    douceur: 0,
    durete: 0,
    solubilite: 0,
    sechage: 0,
    volMousse: 0,
    tenueMousse: 0,
    estCorpsGras: true,
    ligneIngredients: []
  };