import { Component, Input } from '@angular/core';
import { Album } from './album.model';

@Component({
  selector: 'favorite-album',
  template: `
    <h3>One of my favorite albums is: </h3>
    <p>{{currentAlbum.title}}</p>
    <p>By {{currentAlbum.artist}}</p>
    <p>Released in {{currentAlbum.released}}</p>
    <button (click)="toggleEdit()">Edit</button>
    
    <h3 *ngIf="show === true">Edit Favorite Album:</h3>
    <input *ngIf="show === true" [(ngModel)]="currentAlbum.title" placeholder="title">
    <input *ngIf="show === true" [(ngModel)]="currentAlbum.artist" placeholder="artist">
    <input *ngIf="show === true" [(ngModel)]="currentAlbum.released" placeholder="released">
  `
})

export class FavoriteAlbumComponent {
  show: boolean = false;
  toggleEdit = function() {
    if(this.show === true) {
      this.show = false;
    } else  {
      this.show = true;
    }
  }
  @Input()
  currentAlbum: Album;
}
