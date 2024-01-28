import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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
import { HttpClientModule } from '@angular/common/http';
import { ContactInquiriesComponent } from './newsletter-complaints/newsletter-complaints.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {SharedModule} from "../../shared/shared.module";
import {SvgIconComponent} from "angular-svg-icon";

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
    ContactInquiriesComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    SvgIconComponent,
  ],
  providers: [],
  exports: [HomeComponent, VideosComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeModule { }
