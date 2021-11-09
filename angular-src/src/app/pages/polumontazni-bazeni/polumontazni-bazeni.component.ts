import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { SwiperConfigInterface, SwiperPaginationInterface, SwiperScrollbarInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-polumontazni-bazeni',
  templateUrl: './polumontazni-bazeni.component.html',
  styleUrls: ['./polumontazni-bazeni.component.scss']
})
export class PolumontazniBazeniComponent {
  constructor(private metaTagService: Meta, private title: Title) {

  }
  ngOnInit() {
    this.metaTagService.addTags([
      { name: 'keywords', content: 'Iz programa firme Future Pool iz Nemačke nudimo polumontažne bazene sa PVC lajnerom za brzu gradnju.' },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Pool Service' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'date', content: '2021-02-01', scheme: 'YYYY-MM-DD' },
      { charset: 'UTF-8' },
      { property: 'og:image', content: 'assets/img/future-pool-bazeni.jpg'},
      { property: 'twitter:image:src', content: 'assets/img/future-pool-bazeni.jpg'}
    ]);
    this.title.setTitle('Future pool bazeni 💦 Pool Service');
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
