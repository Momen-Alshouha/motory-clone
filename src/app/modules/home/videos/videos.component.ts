import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrl: './videos.component.scss'
})
export class VideosComponent {
  @Input() videoComponent!: { [key: string]: any } | null;


  get videoComponentData() {
    return this.videoComponent?.['data'];
  }
}
