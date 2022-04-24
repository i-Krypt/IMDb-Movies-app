import { Component, OnInit } from '@angular/core';
import { ImdbApiService } from '../../services/imdb-api services/imdb-api.service';
import { ITvs } from '../../interfaces/popularTvs';

@Component({
  selector: 'app-most-popular-tvs',
  templateUrl: './most-popular-tvs.component.html',
  styleUrls: ['./most-popular-tvs.component.css']
})
export class MostPopularTvsComponent implements OnInit {

  tvsData: ITvs[] = [];

  constructor(private popularTvs:ImdbApiService) { }

  ngOnInit(): void {
    this.getTvs();
  }

  getTvs() {
    this.popularTvs.getPopularTvs().subscribe(resp => {
      this.tvsData = resp.items;
    }) 
  }

}
