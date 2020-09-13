import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { NewsService } from '../../../../shared/services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit, OnDestroy {

  news=[];

  newsSubs: Subscription;
  
  constructor(private citiesService: NewsService) { }

  ngOnInit(): void {
    this.newsSubs = this.citiesService.getProducts().subscribe(res => {
      Object.entries(res).map(p => this.news.push(p[1]));
    });
  }
  ngOnDestroy(){
    this.newsSubs ? this.newsSubs.unsubscribe():'';
  }
}
