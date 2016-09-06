import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Album } from './album.model';

@Component({
  selector: 'album-list',
  template: `
    <h3>Some more of my favorite albums are:</h3>

    <div *ngFor="let album of albumList" class="section">
      <div (click)="doStuff(album, albumListPieSlices)" class="album">
        <p>{{album.title}}</p>
        <p>By {{album.artist}}</p>
        <p>Released in {{album.released}}</p>
      </div>
    </div>
  `
})

export class AlbumListComponent {
  doStuff = function(clickedAlbum: Album, someThingElse) {
    alert('Hi there! You just clicked ' + clickedAlbum.title);
    alert('And incedentally, I would still like ' + someThingElse + ' slices of pie, please.');
    this.favoriteAlbumUpdated.emit(clickedAlbum);
  }
  @Input() albumList: Album[];
  @Input() albumListPieSlices: number;
  @Output() favoriteAlbumUpdated = new EventEmitter();
}