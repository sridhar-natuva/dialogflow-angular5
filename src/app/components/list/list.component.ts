import { Component, Input, ViewChild, ViewContainerRef,ElementRef, OnInit } from '@angular/core';
import { Message } from '../../models';
import { WatsonAPI } from '../../services/WatsonAPI.service'
import { AdComponent }      from '../../ad.component';
import { Container } from '@angular/compiler/src/i18n/i18n_ast';
import { DataService } from '../../services/data.service';
//import { fromEvent } from 'rxjs';

@Component({
  templateUrl: './list.component.html',
  styleUrls: ['../../app.component.css']
})

//const content = document.getElementById('content');
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

  constructor(private DataService: DataService ) { }

ngOnInit(){
console.log('temp', this.entries);
//this.json_data.currentMessage.subscribe(recieved_json => i = recieved_json);
console.log('json_data from init',this.json_data);
  for(var i=0; i<=this.data.length;i++){
    this.entries.push( (Object.entries(this.data[i])));
  }
  //this.json_data.currentMessage.subscribe(recieved_json => i = recieved_json);
//console.log('json_data from init',this.json_data);
}

transferData(i): void {
      // send message to subscribers via observable subject
     // console.log(i[3][1]);
      this.DataService.emitter(i[3][1]);
  }
public checkElement(array,str)
  {        
      var item;
    //  console.log('str value', str);
      for (var i = 0; i < array.length; i++) {
        item = array[i];
        
        if (item === str || Array.isArray(item) && this.checkElement(item, str)) {
          return true;
          //console.log('');
        }
      }
  return false;
  }
}