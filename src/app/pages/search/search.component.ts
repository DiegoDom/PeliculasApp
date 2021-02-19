import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../interfaces/nowPlaying-response';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public title = '';
  public movies: Movie[] = [];

  constructor(private activatedRoute: ActivatedRoute,
              private moviesService: MoviesService) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {
      this.title = params.title;
      this.movies = [];
      this.moviesService.searchMovies(this.title)
      .subscribe((movies) => {
        this.movies = movies;
      }, (err) => {
        console.log(err);
      });
    });
  }

}
