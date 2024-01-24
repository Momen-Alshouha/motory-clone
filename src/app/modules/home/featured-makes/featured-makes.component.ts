import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FeaturedMakesService } from '../../../services/featured-makes.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-featured-makes',
  templateUrl: './featured-makes.component.html',
  styleUrls: ['./featured-makes.component.scss']
})
export class FeaturedMakesComponent implements OnInit {

  featuredMakes$: any= [];
  selectedSection: string = 'specs_prices';

  constructor(private featuredMakesService: FeaturedMakesService) { }

  ngOnInit() {
    this.featuredMakesService.featuredMakesComponentData$.subscribe(
      (data) => {
        this.featuredMakes$ = data;
      }
    );
  }

  get specPrices() {
    const specPrices = this.featuredMakes$?.['specs_prices'];
    return specPrices;
  }

  get specPricesList() {
    const specPricesList = this.specPrices.data;
    return specPricesList;
  }

  get shopOffer() {
    const shopOffer = this.featuredMakes$?.['shop_offer'];
    return shopOffer;
  }

  get shopOfferList() {
    const shopOfferList = this.shopOffer.data.list;
    return shopOfferList;
  }

  get shopOfferDisplay() {
    const shopOfferDisplay = this.shopOffer.data.is_shop_offer;
    return shopOfferDisplay;
  }

  get shopOfferTitle() {
    const shopOfferTitle = this.shopOffer.data.title;
    return shopOfferTitle;
  }

  get shopOfferUrl() {
    const shopOfferUrl = this.shopOffer.data.url;
    return shopOfferUrl;
  }

  get shopOfferImage() {
    const shopOfferImage = this.shopOffer.data.image;
    return shopOfferImage;
  }

  get financing() {
    const financing = this.featuredMakes$?.['financing'];
    return financing;
  }

  get financingList() {
    const financingList = this.financing.data;
    return financingList;
  }

  toggleSection(section: string) {
    this.selectedSection = section;
  }

}
