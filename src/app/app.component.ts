import { Component, OnInit } from '@angular/core';
import { Message } from './models';
import { WatsonAPI } from '../app/services';
// import { AdService }         from './ad.service';
import { AdItem }            from './ad-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  public message : Message;
  public messages : Message[];
  result: AdItem[];
  // ngOnInit(){
  //   var  q = '';
  //   WatsonAPI.getResponse(this.message.content).subscribe(res => {
  //     this.messages.push(
  //       new Message(res.text, 'assets/images/bot.png', res.timestamp,'chatbot')
  //     );
      
  //   });
  //     }
  constructor(private adService: WatsonAPI){
    this.result = this.adService.getAds();
    this.message = new Message('', 'assets/images/user.png',new Date(),'user');
    //console.log(this.message);
    this.messages = [
      //  new Message('Hello, How can i help you?', 'assets/images/bot.png', new Date(),'chatbot')
    ];
    // console.log(this.messages);
  }
}
