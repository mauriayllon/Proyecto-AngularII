import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CitiesService } from '../../../../shared/services/cities.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  cities=[];
 
  citiesSubs: Subscription;
  
  constructor(private citiesService: CitiesService) { }

  ngOnInit(): void {
    this.citiesSubs = this.citiesService.getProducts().subscribe(res => {
      Object.entries(res).map(p => this.cities.push(p[1]));
    });
  }
  ngOnDestroy(){
    this.citiesSubs ? this.citiesSubs.unsubscribe():'';
  }


}
