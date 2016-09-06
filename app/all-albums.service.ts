import { Injectable } from '@angular/core';
import { Album } from './album.model';
import { ALBUMS } from './mock-albums';

//same structure as a component. Imports, followed by a decorator with the @ symbol, then an exported class declaration.
//note the dash-case convention with .typeofthing.ts for the file name, and the name of the file is translated to upper camel case for the class declaration here.

@Injectable()
export class AllAlbumsService {
  getAlbums = function(): Promise<Album[]> {
    return Promise.resolve(ALBUMS);
  }
}