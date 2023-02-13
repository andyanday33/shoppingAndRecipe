import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      'Test recipe 1',
      'Testing 1 2 1 2',
      'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/12/Shakshuka-19.jpg'
    ),
    new Recipe(
      'Test recipe 2',
      'Testing 1 2 1 2',
      'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/12/Shakshuka-19.jpg'
    ),
  ];

  @Output() selection: EventEmitter<Recipe>;

  constructor() {
    this.selection = new EventEmitter<Recipe>();
  }

  onSelected(recipe: Recipe) {
    this.selection.emit(recipe);
  }
}
