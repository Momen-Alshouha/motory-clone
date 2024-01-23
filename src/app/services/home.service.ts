import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { APP } from '../app.const';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  data!: Observable<any>;

  readonly componentsNames = {
    CAR_OFFER_LIST: 'carOfferList',
  }

  constructor(private _http: HttpClient) {
    this.data = this._http.get(APP.API.HOME.MAIN).pipe(
      map((response: any) => {
        response['data']
      })
    )
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
