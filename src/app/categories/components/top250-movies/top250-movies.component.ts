import { Component, OnInit } from '@angular/core';
import { Top250MoviesService } from '../../services/top250-movies-service/top250-movies.service';
import { ITop250movies } from '../../interfaces/top250Movies';

@Component({
  selector: 'app-top250-movies',
  templateUrl: './top250-movies.component.html',
  styleUrls: ['./top250-movies.component.css']
})
export class Top250MoviesComponent implements OnInit {

  top250MoviesData: ITop250movies[] = [];

  constructor(private top250Movies:Top250MoviesService) { }

  ngOnInit(): void {
    this.displayTop250Movies();
  }

  displayTop250Movies() {
    this.top250Movies.getTop250Movies().subscribe(resp => {
      this.top250MoviesData = resp.items;
      console.log('tafuta', resp.items)
    }) 
  }

}
