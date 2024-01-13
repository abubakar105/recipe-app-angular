import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'test first',
      'sds smdas sjda',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStxpBKoJ4d1SQxAVdJU-7lQj99LX4AsbPHwe5a71ubMpuXyThcnwRtb0fYF_FTN1eG7Ec&usqp=CAU'
    ),
    new Recipe(
      'test second',
      'sds smdas sjda',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStxpBKoJ4d1SQxAVdJU-7lQj99LX4AsbPHwe5a71ubMpuXyThcnwRtb0fYF_FTN1eG7Ec&usqp=CAU'
    ),
    new Recipe(
      'test third',
      'sds smdas sjda',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStxpBKoJ4d1SQxAVdJU-7lQj99LX4AsbPHwe5a71ubMpuXyThcnwRtb0fYF_FTN1eG7Ec&usqp=CAU'
    ),
  ];

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
