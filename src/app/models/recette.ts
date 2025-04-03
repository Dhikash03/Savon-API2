import { LigneIngredient } from "./ligneIngredient";
import { Resultat } from "./resultat";

export class Recette {
  id: number | null = null;
  titre: string = '';
  description: string = '';
  surgraissage: number = 0;
  apportEnEau: number = 0;
  avecSoude: boolean = false;
  concentrationAlcalin: number = 0;
  qteAlcalin: number = 0;
  ligneIngredients: LigneIngredient[] = [];
  resultats: Resultat[] = [];

}
