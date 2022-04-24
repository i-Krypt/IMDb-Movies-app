import { Component, OnInit } from '@angular/core';
import { IComingSoon } from '../../interfaces/comingSoon';
import { ImdbApiService } from '../../services/imdb-api services/imdb-api.service';

@Component({
  selector: 'app-coming-soon',
  templateUrl: './coming-soon.component.html',
  styleUrls: ['./coming-soon.component.css']
})
export class ComingSoonComponent implements OnInit {

  comingSoonData: IComingSoon[] = [];

  constructor(private comingSoon:ImdbApiService) { }

  ngOnInit(): void {
    this.displayComingSoonMovies();
  }

  displayComingSoonMovies() {
    this.comingSoon.getComingSoonMovies().subscribe(resp => {
      this.comingSoonData = resp.items;
    }) 
  }

}
