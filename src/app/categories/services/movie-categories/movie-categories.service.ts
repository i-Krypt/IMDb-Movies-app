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
    console.log('service', category);
    return this.http
      .get(`https://imdb-api.com/en/API/${category}/k_0x89nowz`)
      .pipe(
        map((response) => response),
        catchError((e: any) => {
          throw new Error(e);
        })
      );
  }

  // Movie details
  getMovieDetails(id: string): Observable<any> {
    console.log('service2', id);
    return this.http.get(`https://imdb-api.com/en/API/Title/k_0x89nowz/${id}`).pipe(
      map((response) => response),
      catchError((e: any) => {
        throw new Error(e);
      })
    );
  }
}
