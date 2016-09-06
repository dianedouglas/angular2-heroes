import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { PiesComponent } from './pies.component';
import { FavoriteThingsComponent } from './favorite-things.component';
import { FavoriteAlbumComponent } from './favorite-album.component';
import { AlbumListComponent } from './album-list.component';
import { AppComponent }   from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [ 
    AppComponent,
    PiesComponent,
    FavoriteThingsComponent,
    FavoriteAlbumComponent,
    AlbumListComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
