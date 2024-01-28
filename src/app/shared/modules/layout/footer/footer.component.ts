import { Component, OnInit } from '@angular/core';
import { FooterService } from '../../../../services/footer.service';
import { Observable,Subscription } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  private subscriptions! : Subscription[];

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
  
    this.subscriptions.push(
      this.footerData$.subscribe(),
      this.browseSiteComponent$.subscribe(),
      this.keepOnTouchComponent$.subscribe(),
      this.socialMediaComponent$.subscribe(),
      this.footerSeoComponent$.subscribe(),
      this.copyRightComponent$.subscribe()
    );
  }


  public showFullDescription = false;

  toggleDescription(): void {
    this.showFullDescription = !this.showFullDescription;
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
  
}
