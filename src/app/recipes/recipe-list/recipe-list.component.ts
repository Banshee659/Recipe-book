import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Seafood Hot Pot', 'Seafood', 
    'https://www.sbs.com.au/food/sites/sbs.com.au.food/files/styles/full/public/images/3245_baked-seafood.jpg?itok=mSNlt9Vj'),
    new Recipe('Fruit Tart', 'Dessert', 
    'https://www.browneyedbaker.com/wp-content/uploads/2012/06/fresh-fruit-pastry-cream-tart-1-550.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
