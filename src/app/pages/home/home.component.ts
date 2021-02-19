import { Component, HostListener, OnInit, OnDestroy } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../interfaces/nowPlaying-response';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  public movies: Movie[] = [];
  public moviesSlideShow: Movie[] = [];

  @HostListener('window:scroll', ['$event'])
    onScroll() {
      const position = (document.documentElement.scrollTop || document.body.scrollTop) + 1300;
      const max = (document.documentElement.scrollHeight || document.body.scrollHeight);
      if (position > max) {
        if (this.moviesService.cargando) { return; }
        this.moviesService.getCartelera()
        .subscribe(movies => {
          this.movies.push(...movies);
        }, (err) => {
          console.log(err);
        });
      }
    }

  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
    this.moviesService.getCartelera()
    .subscribe(movies => {
      this.movies = movies;
      this.moviesSlideShow = movies;
    }, (err) => {
      console.log(err);
    });
  }

  ngOnDestroy() {
    this.moviesService.resetCarteleraPage();
  }

}
