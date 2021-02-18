import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import Swiper from 'swiper';
import { Movie } from '../../interfaces/nowPlaying-response';

@Component({
  selector: 'app-slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.css']
})
export class SlideShowComponent implements OnInit, AfterViewInit {

  @Input()
  movies: Movie[] = [];

  swiper!: Swiper;

  constructor() { }

  ngAfterViewInit() {
    this.swiper = new Swiper('.swiper-container', {
      loop: true,
    });
  }

  ngOnInit(): void {
  }

}
