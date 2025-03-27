import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ingredients } from '../models/Ingredients';

@Injectable({
    providedIn: 'root'
  })
  
  export class IngredientCreateService{
      private apiUrl = 'http://localhost:8080/api-savon/v1';
    
      constructor(private http: HttpClient) {}
    
      /**
       * Récupère toutes les recettes.
       * @returns Un Observable contenant la liste des recettes.
       */
      getAllIngredientCreate(): Observable<Ingredients[]> {
        return this.http.get<Ingredients[]>(`${this.apiUrl}/ingredients`);
      }

      postIngredient(ingredientCreate:Ingredients):Observable<Ingredients> {
        return this.http.post<Ingredients>(`${this.apiUrl}/ingredients`, ingredientCreate );
      }

  }