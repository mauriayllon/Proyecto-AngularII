import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../../../shared/services/auth.service';
import { MessagesService } from '../../../../shared/services/messages.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, OnDestroy {

  messageForm : FormGroup;
  messageSubs: Subscription;

  constructor(private formBuilder: FormBuilder, 
  private authService: AuthService,
  private messagesService: MessagesService) { }

  ngOnInit() {
    this.messageForm = this.formBuilder.group({
      nombre:['', [Validators.required]],
      email:['',[Validators.required]],
      celular:['',[Validators.required]],
      mensaje:['',[Validators.required]],
      ownerId:''
    })
  }

  onCreate(){
    console.log('Form group: ',this.messageForm.value);
      this.messageSubs = this.messagesService.addProduct({ ...this.messageForm.value,
      ownerId:this.authService.getUserId()
      }).subscribe(
      res => {console.log('Resp: ', res)}, err =>{
        console.log('Error de servidor')
      })
  }
   ngOnDestroy(){
    this.messageSubs ? this.messageSubs.unsubscribe():'';
   } 
}