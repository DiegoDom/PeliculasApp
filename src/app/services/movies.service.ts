import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';

import { NowPlayingResponse, Movie } from '../interfaces/nowPlaying-response';
import { MovieDetails } from '../interfaces/movieDetails-response';
import { Cast, MovieCredits } from '../interfaces/movieCredits-response';

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

  resetCarteleraPage() {
    this.apiPage = 1;
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

  searchMovies(query: string): Observable<Movie[]> {
    const params = {...this.params, page : '1', query};
    return this.http.get<NowPlayingResponse>(`${ this.baseUrl }/search/movie`, {
      params
    }).pipe(
      map((resp) => resp.results)
    );
  }

  getMovieDetails(id: number) {
    return this.http.get<MovieDetails>(`${ this.baseUrl }/movie/${ id }`, {
      params : this.params
    }).pipe(
      catchError(() => of(null))
    );
  }

  getMovieCredits(id: number): Observable<Cast[]> {
    return this.http.get<MovieCredits>(`${ this.baseUrl }/movie/${ id }/credits`, {
      params : this.params
    }).pipe(
      map((resp) => resp.cast),
      catchError(() => of([]))
    );
  }

}
