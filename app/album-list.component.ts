import { Component, Input } from '@angular/core';
import { Album } from './album.model';

@Component({
  selector: 'album-list',
  template: `
    <h3>Some more of my favorite albums are:</h3>

    <div *ngFor="let album of albumList" class="section">
      <div (click)="doStuff(album, slicesOfPie)" class="album">
        <p>{{album.title}}</p>
        <p>By {{album.artist}}</p>
        <p>Released in {{album.released}}</p>
      </div>
    </div>
  `
})

export class AlbumListComponent {
  doStuff = function(someThing: Album, someThingElse) {
    alert('Hi there! You just clicked ' + someThing.title);
    alert('And incedentally, I would still like ' + someThingElse + ' slices of pie, please.');
    this.favoriteAlbum = someThing;
  }
  @Input()
  albumList: Album[];
}