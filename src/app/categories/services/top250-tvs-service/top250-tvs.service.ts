import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class Top250TvsService {

  constructor(private http: HttpClient) {

   }

  getTop250Tvs(): Observable<any> {
    return this.http.get("https://imdb-api.com/en/API/Top250TVs/k_1j14rikx")
    .pipe(map(response => response),catchError((e: any) => {throw new Error(e);
      })
  );


  }
}
