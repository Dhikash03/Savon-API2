import { Caracteristique } from "./caracteristique";
import { Resultat } from "./resultat";

export class Mention {
    mentionId:number |null = null;
    label: number = 0;
    noteMin: number = 0;
    noteMax: number = 0;
    caracteristique:Caracteristique|null = null;
    resultat: Resultat[] =[];
    
  }
  