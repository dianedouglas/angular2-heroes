import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <h1>My Favorite Things</h1>
  <ul>
    <li>One of my favorite bands is: {{favoriteBand}}</li>
    <li>If I had to choose a favorite painter it would be: {{favoritePainter}}</li>
    <li>The number of slices of pie I would like is: {{slicesOfPie}}</li>
  </ul>
  <h3>One of my favorite albums is: </h3>
  <p>{{favoriteAlbum.title}}</p>
  <p>By {{favoriteAlbum.artist}}</p>
  <p>Released in {{favoriteAlbum.released}}</p>
  
  <h3>Edit Favorite Album:</h3>
  <input [(ngModel)]="favoriteAlbum.title" placeholder="title">
  <input [(ngModel)]="favoriteAlbum.artist" placeholder="artist">
  <input [(ngModel)]="favoriteAlbum.released" placeholder="released">

  <h3>My favorite types of pie are:</h3>

  <div *ngFor="let currentPie of favoritePies" class="section">
    <div class="pie">
      <p>{{currentPie}}</p>
    <div>
  <div>
  `
})

export class AppComponent { 
  favoriteBand: string = 'Jimi Hendrix';
  favoritePainter: string = 'Van Gogh';
  slicesOfPie: number = 3;
  favoritePies: string[] = ["Apple", "Banana Cream", "Blackberry"];
  favoriteAlbum: Album = new Album("Disintegration", "The Cure", 1989);
}

export class Album {
  constructor (public title: string, public artist: string, public released: number) {  }
}