import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
/* Packages */
import { RatingModule } from 'ng-starrating';

/* Pipes */
import { PipesModule } from '../pipes/pipes.module';


/* Components */
import { SlideShowComponent } from './slide-show/slide-show.component';
import { MoviesPosterGridComponent } from './movies-poster-grid/movies-poster-grid.component';
import { CastingSlideShowComponent } from './casting-slide-show/casting-slide-show.component';



@NgModule({
  declarations: [
    NavbarComponent,
    SlideShowComponent,
    MoviesPosterGridComponent,
    CastingSlideShowComponent
  ],
  exports: [
    NavbarComponent,
    SlideShowComponent,
    MoviesPosterGridComponent,
    CastingSlideShowComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    RatingModule,
    PipesModule
  ]
})
export class ComponentsModule { }
