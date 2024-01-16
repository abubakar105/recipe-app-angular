import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RecipeComponent } from "./recipe/recipe.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { RecipeStartComponent } from "./recipe/recipe-start/recipe-start.component";
import { RecipeDetailComponent } from "./recipe/recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipe/recipe-edit/recipe-edit.component";

const appRoute:Routes=[
    {path:"",redirectTo:'/recipies',pathMatch:'full'},
    {path:"recipies" , component:RecipeComponent,children:[
        {path:'',component:RecipeStartComponent},
        {path:'new',component:RecipeEditComponent},
        {path:':id',component:RecipeDetailComponent},
        {path:':id/edit',component:RecipeEditComponent},
    ]},
    {path:"shopping-list" , component:ShoppingListComponent},
]
@NgModule({
imports:[RouterModule.forRoot(appRoute)],
exports:[RouterModule]
})
export class AppRouting{

}