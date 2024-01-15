import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css'
})
export class RecipeDetailComponent {
  @Input() recipe:Recipe;
  // constructor(){s
  //   console.log(this.recipe)
  // }
  constructor(private recipeService:RecipeService){}
  onAddToShoppingList(){
    this.recipeService.addIngredientToShoppingList(this.recipe.ingredients)

  }
}
