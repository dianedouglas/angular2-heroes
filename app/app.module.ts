import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { PiesComponent } from './pies.component';
import { AppComponent }   from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [ 
    AppComponent,
    PiesComponent,
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
