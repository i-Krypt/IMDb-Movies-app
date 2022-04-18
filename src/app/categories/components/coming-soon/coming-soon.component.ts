import { Component, OnInit } from '@angular/core';
import { ComingSoonService } from '../../services/coming-soon/coming-soon.service';
import { IComingSoon } from '../../interfaces/comingSoon';

@Component({
  selector: 'app-coming-soon',
  templateUrl: './coming-soon.component.html',
  styleUrls: ['./coming-soon.component.css']
})
export class ComingSoonComponent implements OnInit {

  comingSoonData: IComingSoon[] = [];

  constructor(private comingSoon:ComingSoonService) { }

  ngOnInit(): void {
    this.displayComingSoonMovies();
  }

  displayComingSoonMovies() {
    this.comingSoon.getComingSoonMovies().subscribe(resp => {
      this.comingSoonData = resp.items;
    }) 
  }

}
