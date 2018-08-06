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

  @Input('message')
  private message : Message;

  @Input('messages')
  private messages : Message[];

   constructor(private WatsonAPI: WatsonAPI) { }

  ngOnInit() {}
  @ViewChild('input', { read: ElementRef }) chatList: ElementRef;
  public sendMessage(): void {

    this.message.timestamp = new Date();
    this.messages.push(this.message);
    this.WatsonAPI.getResponse(this.message.content).subscribe(res => {
      this.messages.push(
        new Message(res.text, 'assets/images/bot.png', res.timestamp,'chatbot')
      );
      
    });

    this.message = new Message('', 'assets/images/user.png',this.message.timestamp,'user');
    console.log('4th parameter as',this.message.role);
  }
  



}
