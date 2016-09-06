import { Component } from '@angular/core';

@Component({
  selector: 'my-pies',
  template: `
  <h3>My favorite types of pie are:</h3>

  <div *ngFor="let currentPie of favoritePies" class="section">
    <div class="pie">
      <p>{{currentPie}}</p>
    </div>
  </div>
  `
})

export class PiesComponent {
  favoritePies: string[] = ["Apple", "Banana Cream", "Blackberry", "Chocolate Cream", "Raspberry"];
}