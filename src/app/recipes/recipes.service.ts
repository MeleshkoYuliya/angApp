import { Subject } from 'rxjs/Subject';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipesService {
  recipesChanged = new Subject<Recipe[]>();
  private recipes: Recipe[] = [
    new Recipe(
      'Soup',
      'Another simply a test',
      'http://contents.i.sdska.ru/_i/news/c/set/2014/04/shutterstock_98151710.jpg?_640.',
      [
        new Ingredient('meat', 1),
        new Ingredient('potato', 5),
        new Ingredient('carrot', 3),
      ],
    ),
    new Recipe(
      'Burger',
      'This is simply a test',
      'https://burgerking.ru/images/product_images/mobile/Chicken_Fillet.png',
      [
        new Ingredient('bread', 1),
        new Ingredient('meat', 1),
        new Ingredient('green', 3),
      ],
    ),
    new Recipe(
      'Chicken',
      'Second simply a test',
      'http://www.calorizator.ru/sites/default/files/imagecache/product_512/product/chicken-2.jpg',
      [
        new Ingredient('chicken', 1),
        new Ingredient('milk', 2),
        new Ingredient('onion', 3),
      ],
    ),
    new Recipe(
      'Cacke',
      'Great simply a test',
      'https://pirogcompany.ru/upload/resize_cache/iblock/0fa/1300_1300_246d9170fe89bdde643c2d0a09047f47d/pirogcompany_ru_bludo_pirog_osetinskiy_so_shpinatom_i_syrom.jpg',
      [
        new Ingredient('sugar', 1),
        new Ingredient('green', 5),
        new Ingredient('onion', 3),
      ],
    ),
  ];
  constructor() {}
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
