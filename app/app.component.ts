import { Component } from '@angular/core';
import { Album } from './album.model';

@Component({
  selector: 'my-app',
  template: `
  <my-favorite-things [favoriteThingsPieSlices]="slicesOfPie"></my-favorite-things>
  <favorite-album [currentAlbum]="favoriteAlbum"></favorite-album>
  <album-list 
    [albumList]="albums" 
    [albumListPieSlices]="slicesOfPie"
    (favoriteAlbumUpdated)="updateFavoriteAlbum($event)"
  ></album-list>
  <my-pies></my-pies>
  `
})

// when using *ngFor="let thing of things", the first "thing" is a template input variable you are creating.
// it can be used all over the template. "things" needs to be a property of the component class. 

export class AppComponent {
  favoriteAlbum: Album = new Album("Disintegration", "The Cure", 1989);
  slicesOfPie: number = 3;
  albums: Album[] = [
    new Album("Pulse", "Pink Floyd", 1995),
    new Album("Funhouse", "The Stooges", 1970),
    new Album("Twilight of the Thunder God", "Amon Amarth", 2008),
    new Album("Dilate", "Ani DiFranco", 1996),
    new Album("Chopin - Complete Nocturnes", "Brigitte Engerer", 2015),
    new Album("Axis Bold As Love", "The Jimi Hendrix Experience", 1967)
  ];
  updateFavoriteAlbum = function(incomingAlbumFromChild: Album) {
    this.favoriteAlbum = incomingAlbumFromChild;
  }
}