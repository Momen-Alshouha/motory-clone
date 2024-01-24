import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../../services/home.service';
import { Observable, take, tap } from 'rxjs';

@Component({
  selector: 'app-featured-offers',
  templateUrl: './featured-offers.component.html',
  styleUrls: ['./featured-offers.component.scss']
})
export class FeaturedOffersComponent implements OnInit {
  carOfferList$!: Observable<any[]>;
  homeData$!: Observable<any>;

  constructor(private homeService: HomeService) {}

  ngOnInit() {
    this.getHomeData();
    this.getCarOfferList();
  }

  getHomeData() {
    this.homeData$ = this.homeService.getHomeData$();
  }

  getCarOfferList() {
    this.carOfferList$ = this.homeService.carOfferListData$;
    
    // this.carOfferList$.pipe(
    //   tap((value) => {
    //     console.log(value);
    //   })
    // ).subscribe();
  }

}
