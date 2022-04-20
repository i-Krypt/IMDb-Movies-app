import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class Top250MoviesService {

  constructor(private http: HttpClient) {

   }

   getTop250Movies(): Observable<any> {
    return this.http.get("https://imdb-api.com/en/API/Top250Movies/k_0x89nowz")
    .pipe(map(response => response),catchError((e: any) => {throw new Error(e);
      })
  );


  }
}
