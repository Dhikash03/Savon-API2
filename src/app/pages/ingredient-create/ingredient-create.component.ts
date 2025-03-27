import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../../models/Ingredients';
import { IngredientCreateService } from '../../services/ingredient-create.service';

@Component({
  selector: 'app-ingredient-create',
  templateUrl: './ingredient-create.component.html',
  styleUrl: './ingredient-create.component.css'
})

export class IngredientCreateComponent implements OnInit {
  ingredients: Ingredients[] = []; // Liste des ingrédients de l’API
  isLoading: boolean = true; // Flag marquant la récupération des données
  errorMessage: string = ""; // Eventuel message d'erreur

  constructor(private ingredientCreateService: IngredientCreateService) {}

  // Appel de la méthode fetchIngredients de façon optimisée (évite l'appel dans le constructeur)
  
  ngOnInit(): void { 
    this.fetchIngredientCreate();
  }

  /**
* Récupère la liste des ingrédients depuis l'API
*/
fetchIngredientCreate(): void {
  this.ingredientCreateService.getAllIngredientCreate().subscribe({
  next: (data) => {
  this.ingredients = data;
  this.isLoading = false;
  },
  error: (error) => {
  this.errorMessage = "Erreur lors du chargement des ingrédients.";
  console.error("Erreur API:", error);
  this.isLoading = false;
  }
  });
  }
}