import { Component, OnInit } from '@angular/core';
import { PopularTvsService } from '../../services/popular-tvs-service/popular-tvs.service';
import { ITvs } from '../../interfaces/popularTvs';

@Component({
  selector: 'app-most-popular-tvs',
  templateUrl: './most-popular-tvs.component.html',
  styleUrls: ['./most-popular-tvs.component.css']
})
export class MostPopularTvsComponent implements OnInit {

  tvsData: ITvs[] = [];

  constructor(private popularTvs:PopularTvsService) { }

  ngOnInit(): void {
    this.getTvs();
  }

  getTvs() {
    this.popularTvs.getPopularTvs().subscribe(resp => {
      this.tvsData = resp.items;
    }) 
  }

}
