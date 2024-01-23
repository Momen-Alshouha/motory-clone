import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  imageURL : string = 'https://stg-pre-live2-ksa.motory.com/public/assets/images/home/intermediary-platform.svg';
  title : string = 'Title';
  description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
}
