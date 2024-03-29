import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-lis.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent implements OnInit {
  ingredients:Ingredient[];
  constructor(private slService:ShoppingListService){
  }
  ngOnInit(): void {
    this.ingredients=this.slService.getIngredient();
    this.slService.ingredientChanged.subscribe(
      (ingredient:Ingredient[])=>{
        this.ingredients=ingredient
      }
    )
  }
  onIngredientAdded(ingredient:Ingredient){
    this.ingredients.push(ingredient)
  }

}
