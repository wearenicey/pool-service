import {Component} from '@angular/core';
import {SwiperConfigInterface, SwiperPaginationInterface, SwiperScrollbarInterface} from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-bazeni-folija',
  templateUrl: './bazeni-folija.component.html',
  styleUrls: ['./bazeni-folija.component.scss']
})
export class BazeniFolijaComponent {
  public type = 'component';

  public disabled = false;

  public config: SwiperConfigInterface = {
    a11y: true,
    direction: 'horizontal',
    slidesPerView: 3,
    spaceBetween: 24,
    keyboard: true,
    mousewheel: false,
    scrollbar: false,
    navigation: true,
    pagination: false,
    breakpoints: {
      576: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      }
    }
  };

  private scrollbar: SwiperScrollbarInterface = {
    el: '.swiper-scrollbar',
    hide: false,
    draggable: true
  };

  private pagination: SwiperPaginationInterface = {
    el: '.swiper-pagination',
    clickable: true,
    hideOnClick: false
  };
}
