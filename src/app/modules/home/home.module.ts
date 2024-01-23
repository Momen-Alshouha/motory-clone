import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import {HomeComponent} from "./home.component";
import { VideosComponent } from './videos/videos.component';
import {NewsComponent} from "./news/news.component";
import {HeroSectionComponent} from "./hero-section/hero-section.component";
import { SuggestionNewCarsComponent } from "./suggestion-new-cars/suggestion-new-cars.component";
import { AboutComponent } from './about/about.component';
import { FeaturedOffersComponent } from './featured-offers/featured-offers.component';
import { KnowlageCenterComponent } from './knowlage-center/knowlage-center.component';
import { FeaturedMakesComponent } from './featured-makes/featured-makes.component';
import { NewsletterComplaintsComponent } from './newsletter-complaints/newsletter-complaints.component';
@NgModule({
  declarations: [
    HomeComponent,
    VideosComponent,
    NewsComponent,
    HeroSectionComponent,
    SuggestionNewCarsComponent,
    AboutComponent,
    FeaturedOffersComponent,
    KnowlageCenterComponent,
    FeaturedMakesComponent,
    NewsletterComplaintsComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  providers: [],
  exports: [HomeComponent, VideosComponent],
})
export class HomeModule { }
