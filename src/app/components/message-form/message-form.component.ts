//import {NgForm} from '@angular/forms';
import { Component, Input, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { Message } from '../../models';
import { WatsonAPI } from '../../services';
import { AdBannerComponent } from '../../ad-banner.component'
import { Subscription } from 'rxjs/Subscription';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.css']
})

export class MessageFormComponent implements OnInit, OnDestroy {
  public loadComponent: AdBannerComponent;
  public previousContext = {};
  private recieved_json;
  @Input('message')
  private message: Message;
  variable: any;
  subscription: Subscription;

  @Input('messages')
  private messages: Message[];

  constructor(private WatsonAPI: WatsonAPI, private DataService: DataService) {
    this.subscription = this.DataService.receiver().subscribe(res => {
    this.variable = res;
    //  console.log(this.variable.message[3][1]);
      // let data = {
      //   text: this.variable.message[3][1],
      //   id: '12345',
      //   context: this.previousContext
      // }
      this.messages.push(
        new Message(this.variable.message, 'assets/images/user.png', new Date(), 'user')
      );
    });
  }
  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
  ngOnInit() {
    let data = {
      text: '',
      id: '12345',
      context: ''
    }
    this.WatsonAPI.getResponse(data).subscribe(res => {
      console.log("we subscribed watson from message-form component", res);
      this.previousContext = res.context;
      this.messages.push(
        new Message(res.text, 'assets/images/bot.png', new Date(), 'chatbot')
      );
    })
  }
  @ViewChild('input', { read: ElementRef }) chatList: ElementRef;

  public sendMessage(): void {
    let data = {
      text: this.message.content,
      id: '12345',
      context: this.previousContext
    }
    this.messages.push(this.message);
    this.WatsonAPI.getResponse(data).subscribe(res => {
      this.previousContext = res.context;
      // if(res.result.type == 'list'){
      //   this.loadComponent.loadComponent();
      // }
      this.messages.push(
        new Message(res.text, 'assets/images/bot.png', new Date(), 'chatbot')
      );
    });
    this.message = new Message('', 'assets/images/user.png', this.message.timestamp, 'user');
  }
}
