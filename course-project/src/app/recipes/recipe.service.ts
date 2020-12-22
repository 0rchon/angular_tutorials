import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Iskender Kebab',
      'Delicious meal from the turkish city Bursa',
      'https://upload.wikimedia.org/wikipedia/commons/c/ce/Iskender_kebap-2.jpg',
      [
        new Ingredient('Cow Meat', 1),
        new Ingredient('Pide bread', 1),
        new Ingredient('yoghurt', 1),
        new Ingredient('Tomato Sauce', 1)
      ]
    ),
    new Recipe(
      'Inegöl Köfte',
      'Delicious meal from the turkish city Inegöl',
      'https://upload.wikimedia.org/wikipedia/commons/0/05/%C4%B0neg%C3%B6l_k%C3%B6fte.jpg',
      [
        new Ingredient('Cow Meat', 1),
        new Ingredient('Lamb Meat', 1),
        new Ingredient('Bread', 1)
      ]
    )
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
