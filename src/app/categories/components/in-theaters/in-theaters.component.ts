import { Component, OnInit } from '@angular/core';
import { InTheatersService } from '../../services/in-theaters-service/in-theaters.service';
import { InTheaters } from '../../interfaces/inTheaters';

@Component({
  selector: 'app-in-theaters',
  templateUrl: './in-theaters.component.html',
  styleUrls: ['./in-theaters.component.css']
})
export class InTheatersComponent implements OnInit {

  inTheatersData: InTheaters[] = [];

  constructor(private inTheaters:InTheatersService) { }

  ngOnInit(): void {
    this.getInTheaters();
  }

  getInTheaters() {
    this.inTheaters.getMoviesInTheaters().subscribe(resp => {
      this.inTheatersData = resp.items;
      console.log('theater', resp.items)
    }) 
  }
 

}
