import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-favorite-things',
  template: `
    <h1>My Favorite Things</h1>
    <ul>
      <li>One of my favorite bands is: {{favoriteBand}}</li>
      <li>If I had to choose a favorite painter it would be: {{favoritePainter}}</li>
      <li>The number of slices of pie I would like is: {{favoriteThingsPieSlices}}</li>
    </ul>
  `
})

export class FavoriteThingsComponent {
  favoriteBand: string = 'Jimi Hendrix';
  favoritePainter: string = 'Van Gogh';
  @Input()
  favoriteThingsPieSlices: number;
}