import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Ingredients } from '../../models/Ingredients';
import { DEFAULT_INGREDIENT } from '../../models/Ingredients';

@Component({
  selector: 'app-ingredient-form',
  templateUrl: './ingredient-form.component.html',
  styleUrls: ['./ingredient-form.component.css']
})


export class IngredientFormComponent {

  // Champs de saisie des caractéristiques
  ingredientFields: (keyof Ingredients)[] = [
    'sapo', 'ins', 'iode', 'lavant', 'douceur', 'durete',
    'solubilite', 'sechage', 'volMousse', 'tenueMousse',
  ];

  // Récupération des valeurs de la vue et du composant parent
  @Input()
  ingredient: Ingredients = { ...DEFAULT_INGREDIENT };
  
  @Input()
  isEditing: boolean = false;

  // Envoi de valeurs vers la vue et au composant parent
  @Output()
  save = new EventEmitter<Ingredients>();
  @Output()
  cancelEdit = new EventEmitter<void>();

  // Méthodes sur le formulaire
  saveIngredient(): void {
    this.save.emit(this.ingredient);
  }

  cancel(): void {
    this.cancelEdit.emit();
  }
}