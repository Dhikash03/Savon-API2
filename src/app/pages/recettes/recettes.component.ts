import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalIngredientPickerComponent } from '../../shared/modal-ingredient-picker/modal-ingredient-picker.component';
import { IngredientService } from '../../services/ingredient.service';
import { LigneIngredient } from '../../models/ligneIngredient';
import { RecetteDTO } from '../../models/DTO/recetteDTO';
import { RecetteService } from '../../services/recette.service';
import { Ingredients } from '../../models/Ingredients';

@Component({
selector: 'app-recettes',
templateUrl: './recettes.component.html',
styleUrl: './recettes.component.css'
})

export class RecettesComponent implements OnInit {
availableIngredients: Ingredients[] = []; // à alimenter via service
selectedIngredients: LigneIngredient[] = []; // Liste des ingrédients sélectionnés
constructor(
private ingredientService: IngredientService,
private modalService: NgbModal
) {}
/**
* Appel du service de récupération des ingrédients à l'initialisation
*/
ngOnInit(): void {
this.loadIngredients();
}
loadIngredients(): void {

this.ingredientService.getAllIngredients().subscribe({
next: (ingredients) => {
this.availableIngredients = ingredients;
},
error: (err) => {
console.error('Erreur lors du chargement des ingrédients', err);
}
});
}
/**
* Modal de sélection des ingrédients.
*/
openIngredientModal(): void {
const modalRef = this.modalService.open(ModalIngredientPickerComponent);
modalRef.componentInstance.ingredients = this.availableIngredients;
modalRef.result.then((selectedIngredient: Ingredients) => {
if (selectedIngredient) {
this.ajouterIngredient(selectedIngredient);
}
}).catch(() => {});
}
/**
* Méthode d'ajout d'un ingrédient à la recette
* @param ingredient Ingrédient à ajouter à la recette
*/
ajouterIngredient(ingredient: Ingredients): void {
// Empêcher les doublons
if (this.selectedIngredients.find(l => l.ingredients?.id === ingredient.id)) {
return;
}
this.selectedIngredients.push({

  ligneIngredientId: 0, // valeur temporaire pour l'instant
  recette: null, // sera renseigné côté backend à la soumission
  ingredients: ingredient,
  quantite: 0,
  pourcentage: 0
});
}
/**
* Supprime un ingrédient préalablement choisi pour la recette en cours
* @param index
*/
supprimerIngredient(index: number): void {
this.selectedIngredients.splice(index, 1);
}

}
