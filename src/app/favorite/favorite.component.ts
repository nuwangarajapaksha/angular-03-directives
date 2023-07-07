//12 ngClass
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
})
export class FavoriteComponent implements OnInit {
  isSelected: boolean | undefined;
  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.isSelected = !this.isSelected;
  }
}
