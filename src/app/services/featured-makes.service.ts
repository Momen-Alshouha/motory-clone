import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { APP } from '../app.const';

@Injectable({
  providedIn: 'root'
})
export class FeaturedMakesService {
  
  private data$: Observable<any>;

  private readonly componentName = "featuredMakes";

  constructor(private _http: HttpClient) {
    const apiUrl = APP.BASE_URL + APP.API.HOME.MAIN;

    // Set the headers with x-device-type
    const headers = new HttpHeaders().set('x-device-type', 'web');

    this.data$ = this._http.get(apiUrl, { headers: headers }).pipe(
      map((response: any) => response['data'])
    );
  }

  public getHomeData$(): Observable<any> {
    return this.data$;
  }

  public get featuredMakesComponent$(): Observable<any> {
    return this._getComponentData(this.componentName);
  }

  public get featuredMakesComponentData$() {
    return this.featuredMakesComponent$.pipe(map((value) => value['data']));
  }

  private _getComponentData(componentName: string): Observable<any> {
    return this.getHomeData$().pipe(
      map((homeData) => {
        return homeData?.find((item: any) => item?.componentName === componentName);
      })
    );
  }
}
