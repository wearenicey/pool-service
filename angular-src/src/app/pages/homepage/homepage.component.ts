import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { SwiperConfigInterface, SwiperPaginationInterface, SwiperScrollbarInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  viewMode = 'uspomene';
  public type = 'component';
  public disabled = false;
  public config: SwiperConfigInterface = {
    a11y: true,
    direction: 'horizontal',
    effect: 'fade',
    slidesPerView: 1,
    keyboard: true,
    mousewheel: false,
    scrollbar: false,
    navigation: true,
    pagination: false,
    spaceBetween: 0,
    autoplay: {
      delay: 5000,
      disableOnInteraction: true,
    },
  };

  public testemonials: SwiperConfigInterface = {
    a11y: true,
    direction: 'horizontal',
    slidesPerView: 1,
    keyboard: true,
    mousewheel: false,
    scrollbar: false,
    navigation: true,
    pagination: false,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    }
  };

  public partner: SwiperConfigInterface = {
    a11y: true,
    direction: 'horizontal',
    slidesPerView: 5,
    keyboard: true,
    loop: true,
    mousewheel: false,
    scrollbar: false,
    navigation: false,
    pagination: false,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 5,
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

  constructor(
    private metaTagService: Meta, private title: Title) {
  }

  ngOnInit() {
    this.metaTagService.addTags([
      { name: 'keywords', content: 'Sa nama dobijate više od bazena. Stvaramo sećanja u godinama koje dolaze, u oazi Vašeg dvorišta!' },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Pool Service' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'date', content: '2021-02-01', scheme: 'YYYY-MM-DD' },
      { charset: 'UTF-8' }
    ]);
    this.title.setTitle("Pool Service");

  }

}
