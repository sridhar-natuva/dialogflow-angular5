import { Component, Input, OnInit } from '@angular/core';
import { Message } from '../../models';
import { DialogflowService } from '../../services'


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

   constructor(private dialogFlowService: DialogflowService) { }

  ngOnInit() {
  //   this.message = new Message('', 'assets/images/user.png');
  //   console.log(this.message);
  //  this.messages = [
  //    new Message('Welcome to chatbot universe', 'assets/images/bot.png', new Date())
  //  ];
  //   console.log(this.messages);
  }

  public sendMessage(): void {



    this.message.timestamp = new Date();
    this.messages.push(this.message);
console.log('in sendmessage method');
    this.dialogFlowService.getResponse(this.message.content).subscribe(res => {
      this.messages.push(
        new Message(res.text, 'assets/images/bot.png', res.timestamp)
      );
    });

    this.message = new Message('', 'assets/images/user.png');
  }
  



}
