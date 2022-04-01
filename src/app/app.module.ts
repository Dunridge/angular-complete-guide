import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { RecipeBookComponent } from './components/recipe-book/recipe-book.component';
import { ShoppingListEditComponent } from './components/shopping-list/components/shopping-list-edit/shopping-list-edit.component';
import { IngredientComponent } from './components/shopping-list/components/ingredient/ingredient.component';
import { RecipeListComponent } from './components/recipe-book/components/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './components/recipe-book/components/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './components/recipe-book/components/recipe-detail/recipe-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    RecipeBookComponent,
    ShoppingListEditComponent,
    IngredientComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
