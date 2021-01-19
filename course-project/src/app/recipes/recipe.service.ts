import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';
import { Store } from '@ngrx/store';
import * as ShoppingListActions from '../shopping-list/store/shopping-list.actions';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [];

  // private recipes: Recipe[] = [
  //   new Recipe(
  //     'Iskender Kebab',
  //     'Delicious meal from the turkish city Bursa',
  //     'https://upload.wikimedia.org/wikipedia/commons/c/ce/Iskender_kebap-2.jpg',
  //     [
  //       new Ingredient('Cow Meat', 1),
  //       new Ingredient('Pide bread', 1),
  //       new Ingredient('yoghurt', 1),
  //       new Ingredient('Tomato Sauce', 1)
  //     ]
  //   ),
  //   new Recipe(
  //     'Inegöl Köfte',
  //     'Delicious meal from the turkish city Inegöl',
  //     'https://upload.wikimedia.org/wikipedia/commons/0/05/%C4%B0neg%C3%B6l_k%C3%B6fte.jpg',
  //     [
  //       new Ingredient('Cow Meat', 1),
  //       new Ingredient('Lamb Meat', 1),
  //       new Ingredient('Bread', 1)
  //     ]
  //   )
  // ];

  constructor(
    private shoppingListService: ShoppingListService,
    private store: Store<{ shoppingList: { ingredients: Ingredient[] } }>
  ) {}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    //this.shoppingListService.addIngredients(ingredients);
    this.store.dispatch(new ShoppingListActions.AddIngredients(ingredients));
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
