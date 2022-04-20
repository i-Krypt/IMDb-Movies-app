import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { ComingSoonComponent } from './components/coming-soon/coming-soon.component';
import { InTheatersComponent } from './components/in-theaters/in-theaters.component';
import { MostPopularTvsComponent } from './components/most-popular-tvs/most-popular-tvs.component';
import { MostPopularMoviesComponent } from './components/most-popular-movies/most-popular-movies.component';
import { Top250MoviesComponent } from './components/top250-movies/top250-movies.component';
import { Top250TvsComponent } from './components/top250-tvs/top250-tvs.component';
import { ViewAllComponent } from './components/view-all/view-all.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';


@NgModule({
  declarations: [
    ComingSoonComponent,
    InTheatersComponent,
    MostPopularTvsComponent,
    MostPopularMoviesComponent,
    Top250MoviesComponent,
    Top250TvsComponent,
    ViewAllComponent,
    MovieDetailsComponent
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule
  ]
})
export class CategoriesModule { }
