import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import {HomeComponent} from "./home.component";
import { VideosComponent } from './videos/videos.component';
import {NewsComponent} from "./news/news.component";
import {HeroSectionComponent} from "./hero-section/hero-section.component";
import { SuggestionNewCarsComponent } from "./suggestion-new-cars/suggestion-new-cars.component";

@NgModule({
  declarations: [
    HomeComponent,
    VideosComponent,
    NewsComponent,
    HeroSectionComponent,
    SuggestionNewCarsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  providers: [],
  exports: [HomeComponent, VideosComponent],
})
export class HomeModule { }
