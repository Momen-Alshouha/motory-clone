import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map, Observable, repeat, shareReplay, tap } from 'rxjs';
import { APP } from '../app.const';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FooterService {

  data!: Observable<any>;

  readonly componentNames = {
    FOOTER_MENU: {
      name: 'footerMenu',
      BROWSE_SITE: 'browseSite',
      KEEP_ON_TOUCH: 'keepOnTouch',
      SOCIAL_MEDIA: 'socialMedia',
      COPY_RIGHT: 'copyright',
      FOOTER_SEO: 'footerSeo',
    },
  };

  constructor(private _http: HttpClient) {
    const headers = new HttpHeaders().set('lang', 'en');
  
    const apiUrl = APP.BASE_URL + APP.API.HOME.FOOTER;
    this.data = this._http.get(apiUrl, { headers }).pipe(
      map((response: any) => response['data']),
      shareReplay()
    );
  }

  private _getComponentData(dataSrc$: Observable<any>, componentName: string) {
    return dataSrc$.pipe(
      map((data) => {
        const filteredData = data.filter((item: any) => item.componentName === componentName);
        return filteredData[0];
      }),
    );
  }

  public get footerData$(): Observable<any> {
    return this.data;
  }

  public get footerMenuData$(): Observable<any> {
    return this._getComponentData(this.footerData$,this.componentNames.FOOTER_MENU.name);
  }

  private get _footerMenuList$() {
    return this.footerMenuData$.pipe(
      map((menuData) => menuData['data']),
    );
  }

  public get browseSiteComponentData$() {
    return this._getComponentData(
      this._footerMenuList$,
      this.componentNames.FOOTER_MENU.BROWSE_SITE,
    );
  }

  public get keepOnTouchComponentData$() {
    return this._getComponentData(
      this._footerMenuList$,
      this.componentNames.FOOTER_MENU.KEEP_ON_TOUCH,
    );
  }

  public get keepOnTouchTitle$() {
    return this.keepOnTouchComponentData$.pipe(
      map((data) => data['title']),
    );
  }

  public get keepOnTouchList$() {
    return this.keepOnTouchComponentData$.pipe(
      map((data) => data['list']),
    );
  }

  public get socialMediaComponentData$() {
    return this._getComponentData(
      this._footerMenuList$,
      this.componentNames.FOOTER_MENU.SOCIAL_MEDIA,
    );
  }

  public get socialMediaTitle$() {
    return this.socialMediaComponentData$.pipe(
      map((data) => data['title']),
    );
  }

  public get socialMediaList$() {
    return this.socialMediaComponentData$.pipe(
      map((data) => data['list']),
    );
  }

  public get copyRightComponentData$() {
    return this._getComponentData(
      this._footerMenuList$,
      this.componentNames.FOOTER_MENU.COPY_RIGHT,
    );
  }

  public get copyrightTitle$() {
    return this.copyRightComponentData$.pipe(
      map((data) => data['title']),
    );
  }

  public get copyrightList$() {
    return this.copyRightComponentData$.pipe(
      map((data) => data['list']),
    );
  }

  public get footerSeoComponentData$(): Observable<any> {
    return this._getComponentData(
      this._footerMenuList$,
      this.componentNames.FOOTER_MENU.FOOTER_SEO,
    );
  }

  public get seoDescription$() {
    return this.footerSeoComponentData$.pipe(
      map((data) => data['description']),
    );
  }

  public get seoTitle$() {
    return this.footerSeoComponentData$.pipe(
      map((data) => data['title']),
    );
  }

  public get browseSiteTitle$() {
    return this.browseSiteComponentData$.pipe(
      map((data) => data['title']),
    );
  }

  public get browseSiteList$() {
    return this.browseSiteComponentData$.pipe(
      map((data) => data['list']),
    );
  }




}
