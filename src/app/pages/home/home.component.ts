import { Component, OnInit } from '@angular/core';
import { RecetteService } from '../../services/recette.service';
import { Recette } from '../../models/recette';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  recetteDuJour: Recette | null = null;
  isLoading: boolean = true;
  errorMessage: string = '';

  constructor(private recetteService: RecetteService) {}

  ngOnInit(): void {
    this.chargerRecetteDuJour();
  }

  /**
   * Récupère toujours la même recette du jour (la première de la liste)
   */
  chargerRecetteDuJour(): void {
    // Option 1: Récupérer une recette spécifique par son ID
    const recetteDuJourId = 2; // Utilisez l'ID d'une recette qui existe toujours

    //J'utiliserais un random pour pouvoir choisir une recette différente en fonction de chaque jour 
    
    this.recetteService.getRecetteById(recetteDuJourId).subscribe({
      next: (recette) => {
        this.recetteDuJour = recette;
        this.isLoading = false;
      },
      error: (err) => {
        // Si l'ID spécifique échoue, on essaie de récupérer la première recette disponible
        console.error('Erreur lors du chargement de la recette spécifique:', err);
        this.recupererPremiereRecette();
      }
    });
  }

  /**
   * Méthode de secours pour récupérer la première recette disponible
   */
  recupererPremiereRecette(): void {
    this.recetteService.getAllRecettes().subscribe({
      next: (recettes) => {
        if (recettes && recettes.length > 0) {
          // Toujours prendre la première recette de la liste
          this.recetteDuJour = recettes[0];
        }
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Erreur lors du chargement des recettes:', err);
        this.errorMessage = 'Impossible de charger la recette du jour.';
        this.isLoading = false;
      }
    });
  }
}