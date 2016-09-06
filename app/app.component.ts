import { Component } from '@angular/core';
import { Album } from './album.model';

@Component({
  selector: 'my-app',
  template: `
  <my-favorite-things></my-favorite-things>
  <h3>One of my favorite albums is: </h3>
  <p>{{favoriteAlbum.title}}</p>
  <p>By {{favoriteAlbum.artist}}</p>
  <p>Released in {{favoriteAlbum.released}}</p>
  <button (click)="toggleEdit()">Edit</button>
  
  <h3 *ngIf="show === true">Edit Favorite Album:</h3>
  <input *ngIf="show === true" [(ngModel)]="favoriteAlbum.title" placeholder="title">
  <input *ngIf="show === true" [(ngModel)]="favoriteAlbum.artist" placeholder="artist">
  <input *ngIf="show === true" [(ngModel)]="favoriteAlbum.released" placeholder="released">

  <h3>Some more of my favorite albums are:</h3>

  <div *ngFor="let album of albums" class="section">
    <div (click)="doStuff(album, slicesOfPie)" class="album">
      <p>{{album.title}}</p>
      <p>By {{album.artist}}</p>
      <p>Released in {{album.released}}</p>
    </div>
  </div>

  <my-pies></my-pies>
  `
})

// when using *ngFor="let thing of things", the first "thing" is a template input variable you are creating.
// it can be used all over the template. "things" needs to be a property of the component class. 

export class AppComponent {
  favoriteAlbum: Album = new Album("Disintegration", "The Cure", 1989);
  show: boolean = false;  
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
    this.favoriteAlbum = someThing;
  }
  toggleEdit = function() {
    if(this.show === true) {
      this.show = false;
    } else  {
      this.show = true;
    }
  }
}