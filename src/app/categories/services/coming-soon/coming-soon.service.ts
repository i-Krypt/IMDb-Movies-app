import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ComingSoonService {

  constructor(private http: HttpClient) {

   }

  getComingSoonMovies(): Observable<any> {
    return this.http.get("https://imdb-api.com/en/API/ComingSoon/k_qaju7ilp")
    .pipe(map(response => response),catchError((e: any) => {throw new Error(e);
      })
  );


  }
}
