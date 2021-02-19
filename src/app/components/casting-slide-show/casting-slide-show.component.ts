import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import Swiper from 'swiper';
import { Cast } from '../../interfaces/movieCredits-response';

@Component({
  selector: 'app-casting-slide-show',
  templateUrl: './casting-slide-show.component.html',
  styleUrls: ['./casting-slide-show.component.css']
})
export class CastingSlideShowComponent implements OnInit, AfterViewInit {

  @Input()
  casting: Cast[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    const swiper = new Swiper('.swiper-container', {
      slidesPerView : 5.3,
      freeMode : true,
      spaceBetween: 15,
      loop: true
    });
  }

}
