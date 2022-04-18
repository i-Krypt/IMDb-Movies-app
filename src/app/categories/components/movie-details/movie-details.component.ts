import { Component, OnInit } from '@angular/core';
import { MovieCategoriesService } from '../../services/movie-categories/movie-categories.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  id: any;
  detailsData = [];

  constructor(private route: ActivatedRoute,
    private details: MovieCategoriesService) { }

  ngOnInit(): void {
    this.getMovieDetails();
  }


  getMovieDetails() {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
      this.details.getDetails(this.id).subscribe(resp => {
        this.detailsData = resp.items;
        console.log('wahh', resp.items);
      });
    });
  }

}
