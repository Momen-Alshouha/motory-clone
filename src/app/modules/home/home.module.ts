import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import {HomeComponent} from "./home.component";
import { VideosComponent } from './videos/videos.component';

@NgModule({
  declarations: [
    HomeComponent,
    VideosComponent
  ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  providers: [],
  exports: [HomeComponent, VideosComponent],
})
export class HomeModule { }
