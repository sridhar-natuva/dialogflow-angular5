import { Component, OnInit } from '@angular/core';
import { Message } from './models';
import { WatsonAPI } from './services';
import { ResultItem } from './Result.Item';
import { DynamicComponentService } from './services/dynamic-component.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  public message : Message;
  public messages : Message[];
  results: ResultItem[];

  ngOnInit() {
    this.results = this.DynamicComponentService.getComponents();
  }
  constructor(private DynamicComponentService: DynamicComponentService){
    this.message = new Message('', 'assets/images/user.png',new Date(),'user');
    //console.log(this.message);
    this.messages = [
      //  new Message('Hello, How can i help you?', 'assets/images/bot.png', new Date(),'chatbot')
    ];
    // console.log(this.messages);
  }
}
