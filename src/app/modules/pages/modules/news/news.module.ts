import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news.component';
import { NewsRoutingModule } from './news-routing.module';
import { NewsService } from '../../../../shared/services/news.service';

@NgModule({
  imports: [
    CommonModule,
    NewsRoutingModule
  ],
  declarations: [
    NewsComponent
  ],
  providers:[NewsService]
})
export class NewsModule { }