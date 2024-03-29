import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HomeModule} from "./modules/home/home.module";
import { LayoutComponent } from './shared/modules/layout/layout.component';
import {LayoutModule} from "./shared/modules/layout/layout.module";
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
import {AngularSvgIconModule} from "angular-svg-icon";
// register Swiper custom elements
register();

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    LayoutModule,
    AngularSvgIconModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
