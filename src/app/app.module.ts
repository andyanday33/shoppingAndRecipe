import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { RecipeListComponent } from './recipeBook/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipeBook/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipeBook/recipe-detail/recipe-detail.component';
import { ShoppingListComponent } from './shoppingList/shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './shoppingList/shopping-list-edit/shopping-list-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
