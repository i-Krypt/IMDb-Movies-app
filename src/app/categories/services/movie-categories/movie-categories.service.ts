import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MovieCategoriesService {
  constructor(private http: HttpClient) {}

  getCategories(category: string): Observable<any> {
    return this.http
      .get(`https://imdb-api.com/en/API/${category}/k_1j14rikx`)
      .pipe(
        map((response) => response),
        catchError((e: any) => {
          throw new Error(e);
        })
      );
  }

  getDetails(id: string): Observable<any> {
    return this.http
      .get(`https://imdb-api.com/en/API/${id}/k_1j14rikx`)
      .pipe(
        map((response) => response),
        catchError((e: any) => {
          throw new Error(e);
        })
      );
  }
}
