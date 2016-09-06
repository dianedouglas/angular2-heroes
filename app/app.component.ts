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
    </div>
  </div>

  <h3>Some more of my favorite albums are:</h3>

  <div *ngFor="let album of albums" class="section">
    <div (click)="doStuff(album, slicesOfPie)" class="album">
      <p>{{album.title}}</p>
      <p>By {{album.artist}}</p>
      <p>Released in {{album.released}}</p>
    </div>
  </div>
  `
})

// when using *ngFor="let thing of things", the first "thing" is a template input variable you are creating. 
// it can be used all over the template. "things" needs to be a property of the component class. 

export class AppComponent { 
  favoriteBand: string = 'Jimi Hendrix';
  favoritePainter: string = 'Van Gogh';
  slicesOfPie: number = 3;
  favoritePies: string[] = ["Apple", "Banana Cream", "Blackberry", "Chocolate Cream", "Raspberry"];
  favoriteAlbum: Album = new Album("Disintegration", "The Cure", 1989);
  albums: Album[] = [
    new Album("Pulse", "Pink Floyd", 1995),
    new Album("Funhouse", "The Stooges", 1970),
    new Album("Twilight of the Thunder God", "Amon Amarth", 2008),
    new Album("Dilate", "Ani DiFranco", 1996),
    new Album("Chopin - Complete Nocturnes", "Brigitte Engerer", 2015),
    new Album("Axis Bold As Love", "The Jimi Hendrix Experience", 1967)
  ];
  doStuff = function(someThing: Album, someThingElse) {
    alert('Hi there! You just clicked ' + someThing.title);
    alert('And incedentally, I would still like ' + someThingElse + ' slices of pie, please.');
  }
}

export class Album {
  constructor (public title: string, public artist: string, public released: number) {  }
}