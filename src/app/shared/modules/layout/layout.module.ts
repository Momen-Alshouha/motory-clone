import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import {RouterOutlet} from "@angular/router";


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
  ],
  providers: [],
  exports: [ContentComponent, HeaderComponent, FooterComponent]
})
export class LayoutModule { }
