import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { TitleWithLinkComponent } from './components/title-with-link/title-with-link.component';
import {SvgIconComponent} from "angular-svg-icon";

@NgModule({
  declarations: [
    TitleWithLinkComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    SvgIconComponent
  ],
  providers: [],
  exports: [
    TitleWithLinkComponent
  ],
})
export class SharedModule { }
