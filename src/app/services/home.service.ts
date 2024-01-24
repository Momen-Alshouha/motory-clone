import { HttpClient,HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { APP } from '../app.const';
import { catchError ,throwError} from 'rxjs';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private data!: Observable<any>;

  private readonly componentsNames = {
    CAR_OFFER_LIST: 'carOfferList',
  }

  constructor(private _http: HttpClient) {
    const lang = 'en';
    console.log('Lang:', lang);
    const params = new HttpParams().set('lang', lang);
    const apiUrl = APP.BASE_URL + APP.API.HOME.MAIN;
    console.log('API URL:', apiUrl);
  
    this.data = this._http.get(apiUrl, { params }).pipe(
      // tap(url => console.log('Request URL:', url)),
      map((response: any) => response['data'])
    );
  }

  public getHomeData$(): Observable<any> {
    return this.data;
  }

  public get carOfferListComponent$(): Observable<any> {
    return this._getComponentData(this.componentsNames.CAR_OFFER_LIST);
  }

  public get carOfferListData$(): Observable<any[]> {
    return this.carOfferListComponent$.pipe(map((value) => value['data']));
  }

  private _getComponentData(componentName: string) {
    return this.getHomeData$().pipe(
      map((homeData) => {
        return homeData.find((item: any) => item.componentName === componentName);
      })
    );
  }


}
