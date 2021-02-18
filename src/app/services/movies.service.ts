import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NowPlayingResponse } from '../interfaces/nowPlaying-response';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  getCartelera(): Observable<NowPlayingResponse> {
    return this.http.get<NowPlayingResponse>('https://api.themoviedb.org/3/movie/now_playing?api_key=d7be5d4c21c4c7b4472353632f28104d&language=es&page=1');
  }
}
