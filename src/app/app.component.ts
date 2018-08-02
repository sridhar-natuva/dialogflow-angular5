import { Component } from '@angular/core';
import { Message } from '../app/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public message : Message;
  public messages : Message[];


  constructor(){
    this.message = new Message('', 'assets/images/user.png');
    //console.log(this.message);
    this.messages = [
      new Message('Welcome to chatbot universe', 'assets/images/bot.png', new Date())
    ];
     console.log(this.messages);
  }
}
