import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MovieCategoriesService } from '../../services/movie-categories/movie-categories.service';
import { ITvs } from '../../interfaces/popularTvs';

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.css'],
})
export class ViewAllComponent implements OnInit {
  category: any;
  // categoriesData:ITvs[] = [];
  categoriesData: any

  constructor(
    private route: ActivatedRoute,
    private categories: MovieCategoriesService
  ) {}

  ngOnInit(): void {
    this.getCatalogue();
  }


  getCatalogue() {
    this.route.paramMap.subscribe((params) => {
      this.category = params.get('category');
      this.categories.getCategories(this.category).subscribe(resp => {
        this.categoriesData = resp['items'];
      });
    });
  }
}


