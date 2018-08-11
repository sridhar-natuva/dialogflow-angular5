//import {NgForm} from '@angular/forms';
import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Message } from '../../models';
import { WatsonAPI } from '../../services';


@Component({
  selector: 'message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.css']
})





export class MessageFormComponent implements OnInit {
public previousContext ='';
  @Input('message')
  private message : Message;

  @Input('messages')
  private messages : Message[];

   constructor(private WatsonAPI: WatsonAPI) { }

  ngOnInit() {
    let data = {
      text : '',
      //lang: 'en',
      id: '12345',
      context:''
    }
    this.WatsonAPI.getResponse(data).subscribe(res => {
      this.previousContext = res.context;
      this.messages.push(
        new Message(res.text, 'assets/images/bot.png', res.timestamp,'chatbot')
      );
      
    });
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

      this.messages.push(
        new Message(res.text, 'assets/images/bot.png', res.timestamp,'chatbot')
      );
      
    });

    this.message = new Message('', 'assets/images/user.png',this.message.timestamp,'user');
  //  console.log('4th parameter as',this.message.role);
  }
  



}
