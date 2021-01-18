import { Action } from "@ngrx/store";
import { Ingredient } from "../../shared/ingredient.model";
import { ADD_INGREDIENT } from "./shopping-list.actions";

const initialState = {
  ingredients: [
    new Ingredient('tomatoes',3),
    new Ingredient('lamb meat',1)
  ]
};

export function shoppingListReducer(state = initialState, action: Action) {
  switch(action.type) {
    case ADD_INGREDIENT:
      return {
        ...state,
        ingredients: [...state.ingredients, action]
      };
  }
}
