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
  public json_data : any;
  show: boolean = true;
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
  
//console.log('json data for list', this.data);
//console.log('i from nginit', i);

console.log('temp', this.entries);
//this.json_data.currentMessage.subscribe(recieved_json => i = recieved_json);
console.log('json_data from init',this.json_data);
  for(var i=0; i<=this.data.length;i++){
    this.entries.push( (Object.entries(this.data[i])));
  }
  this.json_data.currentMessage.subscribe(recieved_json => i = recieved_json);
//console.log('json_data from init',this.json_data);
}


public open(i){
  console.log('json_data on open method',this.json_data)
  console.log("seleccted site from list", i);
}
}