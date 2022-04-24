import { Component, OnInit } from '@angular/core';
import { ImdbApiService } from '../../services/imdb-api services/imdb-api.service';
import { IpopularMovies } from '../../interfaces/popularMovies';

@Component({
  selector: 'app-most-popular-movies',
  templateUrl: './most-popular-movies.component.html',
  styleUrls: ['./most-popular-movies.component.css']
})
export class MostPopularMoviesComponent implements OnInit {

  popularMoviesData: IpopularMovies[] = [];

  constructor(private popularMovies:ImdbApiService) { }

  ngOnInit(): void {
    this.getPopularMovies();
  }

  getPopularMovies() {
    this.popularMovies.getPopularMovies().subscribe(resp => {
      this.popularMoviesData = resp.items;
    }) 
  }

}
