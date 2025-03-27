import { Caracteristique } from "./caracteristique";
import { Recette } from "./recette";
import { Mention } from "./mention";

export class Resultat {
    resultatId:number |null = null;
    score: number = 0;
    recette: Recette|null  = null;
    caracteristique:Caracteristique|null = null;
    mention: Mention|null = null;
  }
  