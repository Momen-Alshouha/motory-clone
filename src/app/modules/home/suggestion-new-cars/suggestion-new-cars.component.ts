import { Component,ElementRef, ViewChild, Input } from '@angular/core';
import { SwiperContainer } from 'swiper/swiper-element';
import { SwiperOptions } from 'swiper/types';
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-suggestion-new-cars',
  templateUrl: './suggestion-new-cars.component.html',
  styleUrl: './suggestion-new-cars.component.scss'
})
export class SuggestionNewCarsComponent {
  @ViewChild('sliderRef') sliderRef!: ElementRef<HTMLElement>;
  swiperRef: ElementRef | undefined;
  protected readonly environment = environment;
  @Input() suggestedVehiclesListComponent!: any;

  public SuggestionSliderConfig: SwiperOptions = {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
      disabledClass: 'disabled',
    },
    loop:true,
    breakpoints: {
      0: {
        slidesPerView: 1,
        pagination: false,
        loop: false,
        spaceBetween: 12,
      },
      768: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        loop: true,
        spaceBetween: 24,
      },
    },
  };

  get suggestedVehiclesData() {
    return this.suggestedVehiclesListComponent?.['data'];
  }

  get suggestedVehiclesTitle() {
    return this.suggestedVehiclesListComponent?.section_title;
  }

}
