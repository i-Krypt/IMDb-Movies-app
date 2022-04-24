import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ImdbApiService {
  apiURL = `${environment.apiUrl}`;
  key = `${environment.apiKey}`;

  constructor(private http: HttpClient) {}

  // categories

  // coming soon
  getComingSoonMovies(): Observable<any> {
    return this.http.get(`${this.apiURL}ComingSoon/${this.key}`).pipe(
      map((response) => response),
      catchError((e: any) => {
        throw new Error(e);
      })
    );
  }

  // in theaters
  getMoviesInTheaters(): Observable<any> {
    return this.http.get(`${this.apiURL}InTheaters/${this.key}`).pipe(
      map((response) => response),
      catchError((e: any) => {
        throw new Error(e);
      })
    );
  }

  // popular movies
  getPopularMovies(): Observable<any> {
    return this.http.get(`${this.apiURL}MostPopularMovies/${this.key}`).pipe(
      map((response) => response),
      catchError((e: any) => {
        throw new Error(e);
      })
    );
  }

  //popular tv shows
  getPopularTvs(): Observable<any> {
    return this.http.get(`${this.apiURL}MostPopularTVs/${this.key}`).pipe(
      map((response) => response),
      catchError((e: any) => {
        throw new Error(e);
      })
    );
  }

  //top 250 Movies
  getTop250Movies(): Observable<any> {
    return this.http.get(`${this.apiURL}Top250Movies/${this.key}`).pipe(
      map((response) => response),
      catchError((e: any) => {
        throw new Error(e);
      })
    );
  }

  //top 250 Tv shows
  getTop250Tvs(): Observable<any> {
    return this.http.get(`${this.apiURL}Top250TVs/${this.key}`).pipe(
      map((response) => response),
      catchError((e: any) => {
        throw new Error(e);
      })
    );
  }

  //categories list
  getCategories(category: string): Observable<any> {
    return this.http
      .get(`${this.apiURL}${category}/${this.key}`)
      .pipe(
        map((response) => response),
        catchError((e: any) => {
          throw new Error(e);
        })
      );
  }

    // Movie details
    getMovieDetails(id: string): Observable<any> {
      return this.http.get(`${this.apiURL}Title/${this.key}${id}`).pipe(
        map((response) => response),
        catchError((e: any) => {
          throw new Error(e);
        })
      );
    }

}
