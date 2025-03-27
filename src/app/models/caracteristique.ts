import { Mention } from "./mention";
import { Resultat } from "./resultat";

export class Caracteristique {
    caracteristiqueId:number |null = null;
    nom: string = '';
    mention: Mention[] = [];
    resultat: Resultat[] = [];
  }