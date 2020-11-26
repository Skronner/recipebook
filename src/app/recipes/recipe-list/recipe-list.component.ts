import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe','This is simply a test','https://joyfoodsunshine.com/wp-content/uploads/2016/09/easy-pizza-casserole-recipe-5.jpg'),
    new Recipe('Another Recipe','This is simply another test','https://video-shield.mediavine.com/image/upload/s--R_0WpMP4--/ar_16:9,c_fill,f_auto,fl_lossy,h_360,q_auto,w_640/v1552171135/w7by63w5gnt1vppag37c.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
