import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      'test first',
      'sds smdas sjda',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStxpBKoJ4d1SQxAVdJU-7lQj99LX4AsbPHwe5a71ubMpuXyThcnwRtb0fYF_FTN1eG7Ec&usqp=CAU'
    ),
    new Recipe(
      'test first',
      'sds smdas sjda',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStxpBKoJ4d1SQxAVdJU-7lQj99LX4AsbPHwe5a71ubMpuXyThcnwRtb0fYF_FTN1eG7Ec&usqp=CAU'
    ),
    new Recipe(
      'test first',
      'sds smdas sjda',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStxpBKoJ4d1SQxAVdJU-7lQj99LX4AsbPHwe5a71ubMpuXyThcnwRtb0fYF_FTN1eG7Ec&usqp=CAU'
    ),
  ];
}
