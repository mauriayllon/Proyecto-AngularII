import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../../../shared/services/auth.service';
import { RepliesService } from '../../../../shared/services/replies.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit, OnDestroy {

  messages=[];
  messagesGetSubs: Subscription;
  constructor(private authService: AuthService, private repliesService: RepliesService) { }

  ngOnInit() {
    this.loadProduct();
  }

  loadProduct(): void {
    this.messages = [];
    const userId = this.authService.getUserId();
    this.messagesGetSubs = this.repliesService.getMessagesById(userId).subscribe(res => {
      Object.entries(res).map((p: any) => this.messages.push({id: p[0], ...p[1]}));
    });
  }
  ngOnDestroy(){
    this.messagesGetSubs ? this.messagesGetSubs.unsubscribe():'';}
} 