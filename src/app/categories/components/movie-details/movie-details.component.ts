import { Component, OnInit } from '@angular/core';
import { ImdbApiService } from '../../services/imdb-api services/imdb-api.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit {
  id: any;
  detailsData: any;

  constructor(
    private route: ActivatedRoute,
    private details: ImdbApiService
  ) {}

  ngOnInit(): void {
    this.getDescription();
  }

  getDescription() {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
      this.details.getMovieDetails(this.id).subscribe(resp => {
        this.detailsData = resp['items'];
      });
    });
  }
}
