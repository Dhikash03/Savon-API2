import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../../models/Ingredients'; 
import { DEFAULT_INGREDIENT } from '../../models/Ingredients';
import { IngredientService } from '../../services/ingredient.service'; 

@Component({
  selector: 'app-ingredient-manager-page',
  templateUrl: './ingredient-manager-page.component.html',
  styleUrl: './ingredient-manager-page.component.css',
})

export class IngredientManagerPageComponent implements OnInit {
  // Attributs du composant :
  // ------------------------
  ingredients: Ingredients[] = [];
  isEditing: boolean = false; // Permet de savoir si on est en mode édition

  // Objet Ingredient de travail :
  // -----------------------------
  selectedIngredient: Ingredients = { ...DEFAULT_INGREDIENT };

  // Constructeur avec injection du service :
  // ----------------------------------------
  constructor(private ingredientService: IngredientService) {}

  // Fetch avec le service à l'initialisation :
  // ------------------------------------------
  ngOnInit(): void {
    this.fetchIngredients();
  }

  // _________________________________________________
  // METHODES SUR LES FORMULAIRES
  // _________________________________________________


  /**
   * Récupère tous les ingrédients via l'API.
   */
  fetchIngredients(): void {
    this.ingredientService.getAllIngredients().subscribe({
      next: (data) => (this.ingredients = data),
      error: (error) =>
        console.error('Erreur chargement des ingrédients:', error),
    });
  }

  /**
   * Gère la mise à jour de la liste des ingrédients après un import CSV.
   */
  handleImportComplete(): void {
    this.fetchIngredients(); // Recharge la liste après l'importation
  }

  /**
   * Ajoute ou met à jour un ingrédient.
   * @param ingredient - L'ingrédient à ajouter ou mettre à jour.
   */
  saveIngredient(ingredient: Ingredients): void {
    if (this.isEditing && ingredient.id !== null) {
      // Mode modification
      this.ingredientService.updateIngredient(ingredient.id, ingredient).subscribe({
        next: () => {
          this.isEditing = false;
          this.selectedIngredient = { ...DEFAULT_INGREDIENT };
          this.fetchIngredients(); // Recharge la liste
        },
        error: (error) => console.error('Erreur mise à jour ingrédient:', error),
      });
    } else {
      // Mode ajout
      this.ingredientService.addIngredient(ingredient).subscribe({
        next: (newIngredient) => {
          this.ingredients.push(newIngredient);
          this.selectedIngredient = { ...DEFAULT_INGREDIENT };
          this.isEditing = false;
        },
        error: (error) => console.error('Erreur ajout ingrédient:', error),
      });
    }
  }

  /**
   * Prépare la modification d'un ingrédient en remplissant le formulaire avec ses données.
   * @param ingredient L'ingrédient à modifier.
   */
  editIngredient(ingredient: Ingredients): void {
    this.selectedIngredient = { ...ingredient }; // Clone l'objet pour éviter les modifications directes
    this.isEditing = true;
  }

  /**
   * Supprime un ingrédient via l'API.
   * @param id - Identifiant de l'ingrédient à supprimer.
   */
  deleteIngredient(id: number | null): void {
    if (id === null) return;
    
    this.ingredientService.deleteIngredient(id).subscribe({
      next: () => {
        this.ingredients = this.ingredients.filter((ing) => ing.id !== id);
      },
      error: (error) => console.error('Erreur suppression ingrédient:', error),
    });
  }

  /**
   * Supprime TOUS les ingrédients via l'API.
   */
  deleteAllIngredients(): void {
    this.ingredientService.deleteAllIngredients().subscribe({
      next: () => {
        this.ingredients = []; // Vider la liste après suppression
      },
      error: (error) =>
        console.error('Erreur suppression de tous les ingrédients:', error),
    });
  }

  /**
   * Réinitialise le formulaire après soumission.
   */
  resetForm(): void {
    this.selectedIngredient = { ...DEFAULT_INGREDIENT };
    this.isEditing = false;
  }

  // _________________________________________________
  // METHODES POUR L'IMPORT & EXPORT DES INGREDIENTS
  // _________________________________________________

  /**
   * Gestion de l'importation CSV.
   */
  importFromCSV(event: any): void {
    // Logique d'importation depuis le sous-composant
  }

  /**
   * Gestion de l'exportation CSV.
   */
  exportToCSV(): void {
    // Logique d'exportation depuis le sous-composant
  }
}