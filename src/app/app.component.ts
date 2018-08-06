import { Component } from '@angular/core';
import { Message } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public message : Message;
  public messages : Message[];


  constructor(){
    this.message = new Message('', 'assets/images/user.png',new Date(),'user');
    //console.log(this.message);
    this.messages = [
       new Message('Hello, How can i help you?', 'assets/images/bot.png', new Date(),'chatbot')
    ];
     console.log(this.messages);
  }
}
