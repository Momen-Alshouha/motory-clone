import { Component, OnInit } from '@angular/core';
import { FooterService } from '../../../../services/footer.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  readonly footerComponents = {
    BROWSE_SITE: 'browseSite',
    KEEP_ON_TOUCH: 'keepOnTouch',
    SOCIAL_MEDIA: 'socialMedia',
    FOOTER_SEO: 'footerSeo',
    COPY_RIGHT: 'copyright',
  }

  footerData$!: Observable<any>;
  browseSiteComponent$!: Observable<any>;
  keepOnTouchComponent$!: Observable<any>;
  socialMediaComponent$!: Observable<any>;
  footerSeoComponent$!: Observable<any>;
  copyRightComponent$!: Observable<any>;

  constructor(private footerService: FooterService) { }

  ngOnInit() {
    this.footerData$ = this.footerService.footerData$;
    this.browseSiteComponent$ = this.footerService.browseSiteComponentData$;
    this.keepOnTouchComponent$ = this.footerService.keepOnTouchComponentData$;
    this.socialMediaComponent$ = this.footerService.socialMediaComponentData$;
    this.footerSeoComponent$ = this.footerService.footerSeoComponentData$;
    this.copyRightComponent$ = this.footerService.copyRightComponentData$;
  }


  public showFullDescription = false;

  toggleDescription(): void {
    this.showFullDescription = !this.showFullDescription;
  }
  
}
