import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { ContactRoutingModule } from './contact-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MessagesService } from '../../../../shared/services/messages.service';

@NgModule({
  imports: [
    CommonModule,
    ContactRoutingModule,
    //ReactiveFormsModule
  ],
  declarations: [
    ContactComponent
  ],
  providers:[
    MessagesService
  ]
})
export class ContactModule { }