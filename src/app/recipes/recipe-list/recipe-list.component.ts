import {Component} from '@angular/core';
import {Recipe} from "../recipes.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('A test recipe',
      'This is a test',
      'https://cdn-icons-png.flaticon.com/512/3565/3565418.png'),
    new Recipe('A test recipe',
      'This is a test',
      'https://cdn-icons-png.flaticon.com/512/3565/3565418.png')
  ];

}
