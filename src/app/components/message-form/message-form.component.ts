//import {NgForm} from '@angular/forms';
import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Message } from '../../models';
import { WatsonAPI } from '../../services';
import { AdBannerComponent } from '../../ad-banner.component'
import { DataService } from '../../services/data.service';

@Component({
  selector: 'message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.css']
})

export class MessageFormComponent implements OnInit {
  public loadComponent : AdBannerComponent;
public previousContext = {};
private recieved_json ;
  @Input('message')
  private message : Message;

  @Input('messages')
  private messages : Message[];

   constructor(private WatsonAPI: WatsonAPI , private json_data : DataService) { }

  ngOnInit() {
    let data = {
      text : '',
      //lang: 'en',
      id: '12345',
      context:''
    }
    this.WatsonAPI.getResponse(data).subscribe(res =>{
      console.log("we subscribed watson from message-form component",res);
      this.previousContext = res.context;
      this.messages.push(
        new Message(res.text, 'assets/images/bot.png', new Date(),'chatbot')
      );
    })
   // this.json_data.currentMessage.subscribe(recieved_json => this.recieved_json = recieved_json);
    
  }
  @ViewChild('input', { read: ElementRef }) chatList: ElementRef;
  public sendMessage(): void {
    let data = {
      text : this.message.content,
      //lang: 'en',
      id: '12345',
      context: this.previousContext
    }

    this.message.timestamp = new Date();
    this.messages.push(this.message);
    this.WatsonAPI.getResponse(data).subscribe(res => {
    this.previousContext = res.context;
      // if(res.result.type == 'list'){
      //   this.loadComponent.loadComponent();
      // }
      this.messages.push(
        new Message(res.text, 'assets/images/bot.png', new Date(),'chatbot')
      );
      
    });

    this.message = new Message('', 'assets/images/user.png',this.message.timestamp,'user');
  }
  



}
