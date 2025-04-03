import { Component, OnInit } from '@angular/core';
import { RecetteService } from '../../services/recette.service';
import { Recette } from '../../models/recette';
import { Caracteristique } from '../../models/caracteristique';
import { RecetteDTO } from '../../models/DTO/recetteDTO';


 
@Component({
  selector: 'app-recettes',
  templateUrl: './recettes.component.html',
  styleUrl: './recettes.component.css'
})
export class RecettesComponent implements OnInit {
  recettes : Recette[] = [];
  caracteristique : Caracteristique[] = []

  constructor(private simulateurService:RecetteService ) { }

  ngOnInit(): void {
    this.simulateurService.getAllRecettes().subscribe({
      next: (data) => this.recettes = data,
      error: (err) => console.error('Erreur lors du chargement des ingrédients : ', err)
    });
  }
  deleteRecette(id: number | null): void {
    if (id === null) return;
    
    this.simulateurService.deleteRecette(id).subscribe({
      next: () => {
        // Supprimer la recette de la liste locale après suppression réussie
        this.recettes = this.recettes.filter(recette => recette.id !== id);
        // Optionnel: afficher un message de confirmation
        alert('Recette supprimée avec succès');
      },
      error: (err) => {
        console.error('Erreur lors de la suppression de la recette:', err);
        alert('Erreur lors de la suppression de la recette');
      }
    });
  }
}