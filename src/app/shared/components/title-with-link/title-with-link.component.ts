import { Component, Input } from '@angular/core';
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-title-with-link',
  templateUrl: './title-with-link.component.html',
  styleUrl: './title-with-link.component.scss'
})
export class TitleWithLinkComponent {
  @Input() title: string = '';
  @Input() viewMoreText: string = '';
  @Input() viewMoreLink: string = '';
  protected readonly environment = environment;
}
