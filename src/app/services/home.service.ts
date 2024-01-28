import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable, map, shareReplay} from 'rxjs';
import { APP } from '../app.const';
import { catchError ,throwError} from 'rxjs';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  data!: Observable<any>;
  private readonly componentsNames = {
    CAR_OFFER_LIST: 'carOfferList',
    AUTO_NEWS: 'autoNews',
    VIDEO: 'videosList',
    SUGGESTED_VEHICLES_LIST: 'suggestedVehiclesList',
    HOME_PAGE_MENU: 'homePageMenu',
  }

  constructor(private _http: HttpClient) {
    const apiUrl = APP.BASE_URL + APP.API.HOME.MAIN;

    // Set the headers with x-device-type
    const headers = new HttpHeaders().set('x-device-type', 'web').set('lang','en');

    this.data = this._http.get(apiUrl, { headers: headers }).pipe(
      shareReplay(1),
      map((response: any) => response['data']),
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

  public get autoNewsComponent$(): Observable<any> {
    return this._getComponentData(this.componentsNames.AUTO_NEWS);
  }
  public get autoNewsData$(): Observable<any> {
    return this.autoNewsComponent$.pipe(map((value) => value['data']));
  }


  public get videoComponent$(): Observable<any> {
    return this._getComponentData(this.componentsNames.VIDEO);
  }

  public get videoData$(): Observable<any[]> {
    return this.videoComponent$.pipe(map((value) => value['data']));
  }

  public get suggestedVehicleListComponent$(): Observable<any> {
    return this._getComponentData(this.componentsNames.SUGGESTED_VEHICLES_LIST);
  }

  public get suggestedVehicleListData$(): Observable<any> {
    return this.suggestedVehicleListComponent$.pipe(
      map((value) => value['data']),
    );
  }

  public get quickAccessComponent$(): Observable<any> {
    return this._getComponentData(this.componentsNames.HOME_PAGE_MENU);
  }
}
