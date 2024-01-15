import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-lis.service";

@Injectable()
export class RecipeService{
    recipeSelected=new EventEmitter<Recipe>();
   private recipes: Recipe[] = [
        new Recipe(
          'Burger',
          'sds smdas sjda',
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStxpBKoJ4d1SQxAVdJU-7lQj99LX4AsbPHwe5a71ubMpuXyThcnwRtb0fYF_FTN1eG7Ec&usqp=CAU',
          [
            new Ingredient('Meat',1),
            new Ingredient('Fries',12),
          ]
        ),
        new Recipe(
          'Pizza',
          'sds smdas sjda',
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStxpBKoJ4d1SQxAVdJU-7lQj99LX4AsbPHwe5a71ubMpuXyThcnwRtb0fYF_FTN1eG7Ec&usqp=CAU',
          [
            new Ingredient('Chicken',1),
            new Ingredient('Doe',12),
          ]
        ),
        // new Recipe(
        //   'test third',
        //   'sds smdas sjda',
        //   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStxpBKoJ4d1SQxAVdJU-7lQj99LX4AsbPHwe5a71ubMpuXyThcnwRtb0fYF_FTN1eG7Ec&usqp=CAU'
        // ),
      ];
      constructor(private shoppingListService:ShoppingListService){}
      getRecipe(){
        return this.recipes.slice()
      }
      addIngredientToShoppingList(ingredient:Ingredient[]){
        this.shoppingListService.addIngredients(ingredient)
      }
}