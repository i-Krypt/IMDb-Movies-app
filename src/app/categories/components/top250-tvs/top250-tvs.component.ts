import { Component, OnInit } from '@angular/core';
import { ImdbApiService } from '../../services/imdb-api services/imdb-api.service';
import { I250Tvs } from '../../interfaces/top250Tvs';

@Component({
  selector: 'app-top250-tvs',
  templateUrl: './top250-tvs.component.html',
  styleUrls: ['./top250-tvs.component.css']
})
export class Top250TvsComponent implements OnInit {

  topData: I250Tvs[] = []

  constructor(private top250Tvs:ImdbApiService) { }

  ngOnInit(): void {
    this.displayTop250Tvs();
  }

  displayTop250Tvs() {
    this.top250Tvs.getTop250Tvs().subscribe(resp => {
      this.topData = resp.items;
      console.log('hapa', resp.items)
    }) 
  }

}
