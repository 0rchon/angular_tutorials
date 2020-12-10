import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Iskender Kebab',
      'Delicious meal from the turkish city Bursa',
      'https://upload.wikimedia.org/wikipedia/commons/c/ce/Iskender_kebap-2.jpg'),
    new Recipe(
      'Inegöl Köfte',
      'Delicious meal from the turkish city Inegöl',
      'https://upload.wikimedia.org/wikipedia/commons/0/05/%C4%B0neg%C3%B6l_k%C3%B6fte.jpg')
  ];
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
