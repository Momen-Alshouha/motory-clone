import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';
@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent {
  protected readonly environment = environment;

}
