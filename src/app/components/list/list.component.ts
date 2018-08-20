import { Component, Input } from '@angular/core';
import { Message } from '../../models';
import { WatsonAPI } from '../../services/WatsonAPI.service'
import { AdComponent }      from '../../ad.component';

@Component({
  templateUrl: './list.component.html',
  styleUrls: ['../../app.component.css']
})
export class ListComponent implements AdComponent {
   public previousContext ='';
  private WatsonAPI : WatsonAPI;

  @Input() data: any[];
  
  @Input('message')
  private message : Message;

  @Input('messages')
  private messages : Message[];

  
   constructor() { }

public open(site){

  console.log("seleccted site from list", site);

  let data = {
    text : 'site '+site.ID,
    //lang: 'en',
    id: '12345',
    context: this.previousContext
  }

  //this.message.timestamp = new Date();
  //this.message = new Message('site '+site.ID , 'assets/images/user.png',new Date(),'user');
  //this.messages.push(this.message);
  this.WatsonAPI.getResponse(data).subscribe(res => {
    this.previousContext = res.context;

    this.messages.push(
      new Message(res.text, 'assets/images/bot.png',new Date(),'chatbot')
    );
    
  });
}

}

// export interface sites {
//   ID: number;
//   name: string;
//   brand: string;
//   address: number;
  
// }