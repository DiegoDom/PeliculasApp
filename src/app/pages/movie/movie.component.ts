import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { MoviesService } from '../../services/movies.service';
import { MovieDetails } from '../../interfaces/movieDetails-response';
import { Cast } from '../../interfaces/movieCredits-response';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  public movie!: MovieDetails;
  public casting: Cast[] = [];

  constructor( private activatedRoute: ActivatedRoute,
               private moviesService: MoviesService,
               private location: Location,
               private router: Router) { }

  ngOnInit(): void {
    const { id } = this.activatedRoute.snapshot.params;

    combineLatest([
      this.moviesService.getMovieDetails(id),
      this.moviesService.getMovieCredits(id)
    ])
    .subscribe(([movie, casting]) => {
      if (!movie) {
        this.router.navigateByUrl('/home');
        return;
      }

      this.movie = movie;

      this.casting = casting;
      /* Solo actores con imagen */
      /* this.casting = casting.filter(actor => actor.profile_path != null); */
    });
  }

  goBack() {
    this.location.back();
  }

}
