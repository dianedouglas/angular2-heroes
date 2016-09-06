import { Component } from '@angular/core';
import { Album } from './album.model';
import { AllAlbumsService } from './all-albums.service';

@Component({
  selector: 'my-app',
  providers: [AllAlbumsService],
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
  constructor(private albumService: AllAlbumsService){
    
  }
  albums: Album[];
  getTheAlbumsFromTheService(): void {
    this.albums = this.albumService.getAlbums();
  }
  ngOnInit() {
    this.getTheAlbumsFromTheService();
  }
  favoriteAlbum: Album = new Album("Disintegration", "The Cure", 1989);
  slicesOfPie: number = 3;
  updateFavoriteAlbum = function(incomingAlbumFromChild: Album) {
    this.favoriteAlbum = incomingAlbumFromChild;
  }
}