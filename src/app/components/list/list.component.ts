import { Component, Input, ViewChild, ViewContainerRef,ElementRef, OnInit } from '@angular/core';
import { Message } from '../../models';
import { WatsonAPI } from '../../services/WatsonAPI.service'
import { AdComponent }      from '../../ad.component';
import { Container } from '@angular/compiler/src/i18n/i18n_ast';
import { DataService } from '../../services/data.service';
//import { fromEvent } from 'rxjs';

@Component({
  templateUrl: './list.component.html',
  styleUrls: ['../../app.component.css','./list.component.css']
})

//const content = document.getElementById('content');
export class ListComponent implements AdComponent , OnInit {
  public keys : any[] = [];
  show: boolean = true;
  public previousContext ='';
  private WatsonAPI : WatsonAPI;
  public entries: any[] = [];
  public entries2: any[] = [];
  @Input() data: any;
  
  @Input('message')
  private message : Message;

  @Input('messages')
  private messages : Message[];

  constructor(private DataService: DataService ) { }

ngOnInit(){
//console.log('temp', this.entries);
//this.json_data.currentMessage.subscribe(recieved_json => i = recieved_json);
  for(var i=0; i<this.data.length;i++){
    
    this.keys = Object.keys(this.data[i]);
    var values = Object.values(this.data[i]);
    
    
    this.entries.push( values );

    
   // console.log('keys are', this.keys);
   // console.log('values are', values);
    
    
    // for(var j=0; j)
    // if(this.keys[i].includes("userinput")){
    //   console.log("your in userinput if condition");
      
      
    // }else{
    //   this.entries2.push(values);
    // }
    // console.log("entries2 from for loop",this.entries2);
    //this.entries.push( (Object.entries(this.data[i])));
  }
  //this.json_data.currentMessage.subscribe(recieved_json => i = recieved_json);
//console.log('json_data from init',this.json_data);
}
callX(x): string {
  var tempVal = "";
  for(var i=1;i<x.length;i++){
    tempVal = tempVal + x[i];

  }
  return tempVal;
}
transferData(i): void {
      // send message to subscribers via observable subject
      console.log('datatransfer obj', i);
       if(this.keys.includes('userinput')){
         console.log("user_input is present");
       }
      console.log("message to dataservice",i[0]);
      this.DataService.emitter(i[0]);
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