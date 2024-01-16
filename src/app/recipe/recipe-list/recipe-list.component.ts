import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] ;
  constructor(private reciPeService:RecipeService,private router:Router,private rout:ActivatedRoute){}
ngOnInit(): void {
  this.recipes=this.reciPeService.getRecipe()
}
onNewRecipe(){
  this.router.navigate(['new'],{relativeTo:this.rout})
}
  //   new Recipe(
  //     'test first',
  //     'sds smdas sjda',
  //     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStxpBKoJ4d1SQxAVdJU-7lQj99LX4AsbPHwe5a71ubMpuXyThcnwRtb0fYF_FTN1eG7Ec&usqp=CAU'
  //   ),
  //   new Recipe(
  //     'test second',
  //     'sds smdas sjda',
  //     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStxpBKoJ4d1SQxAVdJU-7lQj99LX4AsbPHwe5a71ubMpuXyThcnwRtb0fYF_FTN1eG7Ec&usqp=CAU'
  //   ),
  //   new Recipe(
  //     'test third',
  //     'sds smdas sjda',
  //     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStxpBKoJ4d1SQxAVdJU-7lQj99LX4AsbPHwe5a71ubMpuXyThcnwRtb0fYF_FTN1eG7Ec&usqp=CAU'
  //   ),
  // ];

  // onRecipeSelected(recipe: Recipe) {
  //   this.recipeWasSelected.emit(recipe);
  // }
}
