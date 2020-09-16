import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesComponent } from './messages.component';
import { MessagesRoutingModule } from './messages-routing.module';
import { RepliesService } from '../../../../shared/services/replies.service';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  imports: [
    CommonModule,
    MessagesRoutingModule,
    MatCardModule,
    MatInputModule
  ],
  declarations: [
    MessagesComponent
  ],
  providers:[
    RepliesService
  ]
})
export class MessagesModule { } 