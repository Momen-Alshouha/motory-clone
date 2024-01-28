import { Component, OnInit, Input } from '@angular/core';
import {environment} from "../../environments/environment";
import {HomeService} from "../../services/home.service";
import { Observable, timer } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  protected readonly environment = environment;
  public autoNewsData$!: Observable<any>;
  public autoNewsComponent$!: Observable<any>;
  public videoComponent$!: Observable<any>;
  public videoData$!: Observable<any>;
  public suggestedVehicleList$!: Observable<any>;
  public suggestedVehicleListData$!: Observable<any>;

  constructor(
    private _homeApiService: HomeService,
  ) {
  }
  ngOnInit() {
    this.autoNewsComponent$ = this._homeApiService.autoNewsComponent$;
    this.autoNewsData$ = this._homeApiService.autoNewsData$;
    this.videoComponent$ = this._homeApiService.videoComponent$;
    this.videoData$ = this._homeApiService.videoData$;
    this.suggestedVehicleList$ = this._homeApiService.suggestedVehicleListComponent$;
    this.suggestedVehicleListData$ = this._homeApiService.suggestedVehicleListData$;

  }
}
