import { Component, OnInit } from '@angular/core';
import { KnowledgeCenterService } from '../../../services/knowlage-center.service';
import { Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';


@Component({
  selector: 'app-knowlage-center',
  templateUrl: './knowlage-center.component.html',
  styleUrls: ['./knowlage-center.component.scss']
})
export class KnowlageCenterComponent implements OnInit {

  knowledgeCenterData: any[] = [];

  constructor(private knowledgeCenterService: KnowledgeCenterService) {}

  ngOnInit() {
    this.knowledgeCenterService.knowlageCenterComponentData$.subscribe(
      (data) => {
        this.knowledgeCenterData = data;
      }
    );
  }
  

}
