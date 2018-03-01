import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { MovieComponent } from './movie/movie.component';
import { SubmittedComponent } from './submitted/submitted.component';

import { MovieService } from './movie.service';
import { MovieratingService } from './movierating.service';
import { MouseoverDirective } from './mouseover.directive';


@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    SubmittedComponent,
    MouseoverDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [MovieService, MovieratingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
