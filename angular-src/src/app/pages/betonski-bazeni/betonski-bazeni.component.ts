import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { SwiperConfigInterface, SwiperPaginationInterface, SwiperScrollbarInterface } from 'ngx-swiper-wrapper';


@Component({
  selector: 'app-betonski-bazeni',
  templateUrl: './betonski-bazeni.component.html',
  styleUrls: ['./betonski-bazeni.component.scss']
})
export class BetonskiBazeniComponent {

  constructor(private metaTagService: Meta, private title: Title) {

  }
  ngOnInit() {
    this.metaTagService.addTags([
      { name: 'keywords', content: 'Armirano betonski bazeni mogu biti različitog oblika i dimenzija. Za njih važi da su najbolji.' },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Pool Service' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'date', content: '2021-02-01', scheme: 'YYYY-MM-DD' },
      { charset: 'UTF-8' }
    ]);
    this.title.setTitle("Betonski bazeni");
  }
  public type = 'component';

  public disabled = false;

  public config: SwiperConfigInterface = {
    a11y: true,
    direction: 'horizontal',
    spaceBetween: 24,
    keyboard: true,
    mousewheel: false,
    scrollbar: false,
    navigation: true,
    pagination: false,
    centeredSlides: true,
    loop: true,
    breakpoints: {
      576: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 2,
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
