import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, map } from 'rxjs/operators';

import { NowPlayingResponse, Movie } from '../interfaces/nowPlaying-response';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private baseUrl = 'https://api.themoviedb.org/3';
  private apiPage = 1;
  public cargando = false;

  constructor(private http: HttpClient) { }

  get params() {
    return {
      api_key : 'd7be5d4c21c4c7b4472353632f28104d',
      language : 'en-Us',
      page : this.apiPage.toString()
    };
  }

  getCartelera(): Observable<Movie[]> {

    if (this.cargando) {
      return of([]);
    }

    this.cargando = true;
    return this.http.get<NowPlayingResponse>(`${ this.baseUrl }/movie/now_playing`, {
      params : this.params
    }).pipe(
      map((resp) => resp.results),
      tap( () => {
        this.apiPage += 1;
        this.cargando = false;
      })
    );
  }
}
