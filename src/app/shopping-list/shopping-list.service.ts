import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {

  private ingredients =[
    new Ingredient('Apples', 5),
    new Ingredient('orange', 15),


  ];

  getIngredients(){
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient){

    this.ingredients.push(ingredient);

  }
}
