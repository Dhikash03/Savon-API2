import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { HttpClientModule } from '@angular/common/http';
import { IngredientsComponent } from './pages/ingredients/ingredients.component';
import { IngredientCreateComponent } from './pages/ingredient-create/ingredient-create.component';
import { IngredientListComponent } from './shared/ingredient-list/ingredient-list.component';
import { IngredientFormComponent } from './shared/ingredient-form/ingredient-form.component';
import { IngredientImportExportComponent } from './shared/ingredient-import-export/ingredient-import-export.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IngredientManagerPageComponent } from './pages/ingredient-manager-page/ingredient-manager-page.component';
import { UtilisateurComponent } from './pages/utilisateur/utilisateur.component';
import { ModalBoxConfirmationComponent } from './shared/modal-box-confirmation/modal-box-confirmation.component';
import { ModalIngredientPickerComponent } from './shared/modal-ingredient-picker/modal-ingredient-picker.component';
import { RecettesComponent } from './pages/recettes/recettes.component';
import { RadarChartComponent } from './shared/radar-chart/radar-chart.component';
import { RecetteCalculateurComponent } from './pages/recette-calculateur/recette-calculateur.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    PrivacyPolicyComponent,
    IngredientsComponent,
   IngredientCreateComponent,
   IngredientListComponent,
   IngredientFormComponent,
   IngredientImportExportComponent,
   IngredientManagerPageComponent,
   UtilisateurComponent,
   ModalBoxConfirmationComponent,
   ModalIngredientPickerComponent,
   RecettesComponent,
   RadarChartComponent,
   RecetteCalculateurComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
