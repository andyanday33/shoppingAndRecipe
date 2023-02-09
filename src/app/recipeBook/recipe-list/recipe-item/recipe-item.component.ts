import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
})
export class RecipeItemComponent implements OnInit, OnChanges {
  @Input() recipe!: Recipe;

  ngOnInit() {
    this.checkRequiredFields(this.recipe);
  }

  ngOnChanges() {
    this.checkRequiredFields(this.recipe);
  }

  checkRequiredFields(input: Recipe) {
    if (input === null) {
      throw new Error("Attribute 'recipe' is required");
    }
  }
}
