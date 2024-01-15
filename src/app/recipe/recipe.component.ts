import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.css',
  providers:[RecipeService]
})
export class RecipeComponent implements OnInit {
  selectdRecipe:Recipe;
  constructor(private recipeService:RecipeService){}
  ngOnInit(): void {
    this.recipeService.recipeSelected.subscribe(
      (recipe:Recipe) =>{
        this.selectdRecipe=recipe
      }
      );
  }
}
