import { Mention } from "../mention";
import { Resultat } from "../resultat";
import { Recette } from "../recette";

export class Caracteristique {
    id: number | null = null;
    nom : string = "";
    mentions : Mention [] = [];
    resultats : Resultat [] = [];
  }