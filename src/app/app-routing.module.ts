import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { Ingredients } from './models/Ingredients';
import { IngredientsComponent } from './pages/ingredients/ingredients.component';


import { RecettesComponent } from './pages/recettes/recettes.component';
import { UtilisateurComponent } from './pages/utilisateur/utilisateur.component';
import { IngredientManagerPageComponent } from './pages/ingredient-manager-page/ingredient-manager-page.component';
import { IngredientListComponent } from './shared/ingredient-list/ingredient-list.component';
import { RecetteCalculateurComponent } from './pages/recette-calculateur/recette-calculateur.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'confidentialite', component: PrivacyPolicyComponent },
  { path: 'ingredients', component: IngredientsComponent},
  { path: 'recette', component: RecettesComponent},
  { path: 'utilisateur', component: UtilisateurComponent },
  { path: 'ingredient-manager', component: IngredientManagerPageComponent},
  { path: 'ingredient-list', component: IngredientListComponent},
  { path: 'recettes', component: RecettesComponent},
  { path: 'recette-calculateur', component: RecetteCalculateurComponent},

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
