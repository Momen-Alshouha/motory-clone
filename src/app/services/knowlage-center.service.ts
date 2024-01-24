import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { APP } from '../app.const';

@Injectable({
  providedIn: 'root',
})
export class KnowledgeCenterService {

  private data$: Observable<any>;

  private readonly componentsNames = {
    KNOWLEDGE_CENTER: 'knowledgeCenter',
  };

  constructor(private _http: HttpClient) {
    const lang = 'en';
    const params = new HttpParams().set('lang', lang);
    const apiUrl = APP.BASE_URL + APP.API.HOME.MAIN;

    this.data$ = this._http.get(apiUrl, { params }).pipe(
      map((response: any) => response['data'])
    );
  }

  public getHomeData$(): Observable<any> {
    return this.data$;
  }

  public get knowlageCenterComponent$(): Observable<any> {
    return this._getComponentData(this.componentsNames.KNOWLEDGE_CENTER);
  }

  public get knowlageCenterComponentData$(): Observable<any[]> {
    return this.knowlageCenterComponent$.pipe(map((value) => value['data']));
  }

  private _getComponentData(componentName: string) {
    return this.getHomeData$().pipe(
      map((homeData) => {
        return homeData.find((item: any) => item.componentName === componentName);
      })
    );
  }

}
