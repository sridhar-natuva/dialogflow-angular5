import { Component, Input, ViewChild, ViewContainerRef, OnInit } from '@angular/core';
import { Message } from '../../models';
import { WatsonAPI } from '../../services/WatsonAPI.service'
import { AdComponent }      from '../../ad.component';
import { Container } from '@angular/compiler/src/i18n/i18n_ast';
//import { DataService } from '../../services/data.service';

@Component({
  templateUrl: './list.component.html',
  styleUrls: ['../../app.component.css']
})
export class ListComponent implements AdComponent , OnInit {
   public previousContext ='';
  private WatsonAPI : WatsonAPI;
  public entries: any[] = [];
  @Input() data: any;
  
  @Input('message')
  private message : Message;

  @Input('messages')
  private messages : Message[];

// @ViewChild('dynamicTemplate', { read : ViewContainerRef}) Container;
  
constructor() { }

ngOnInit(){
  
console.log('json data for list', this.data);
 
console.log('temp', this.entries);
  for(var i=0; i<=this.data.length;i++){
    this.entries.push( (Object.entries(this.data[i])));
  }
  //this.json_data.currentMessage.subscribe(message => i = message)

}


public open(site){
 // this.json_data.changeMessage.subscribe(i);
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
  // this.WatsonAPI.getResponse(data).subscribe(res => {
  //   this.previousContext = res.context;

  //   this.messages.push(
  //     new Message(res.text, 'assets/images/bot.png',new Date(),'chatbot')
  //   );
    
  // });
}

}

// export interface sites {
//   ID: number;
//   name: string;
//   brand: string;
//   address: number;
  
// }