import { Injectable, OnInit, Input } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Message } from '../models';
import { environment } from '../../environments/environment';
 import { ListComponent }   from '../components/list/list.component';
import { TableComponent } from '../components/table/table.component';
import { AdItem } from '../ad-item';
import { ImageComponent } from "../components/image/image.component";
import { GraphComponent } from "../components/graph/graph.component";

@Injectable()
export class WatsonAPI {

  // @Input('messages')
  // private messages : Message[];

  // ngOnInit() {
  //   this.getResponse('').subscribe(res => {
  //     this.messages.push(
  //       new Message(res.text, 'assets/images/bot.png', res.timestamp,'chatbot')
  //     );

  //   });
  // }

  private baseURL: string = "https://gvrchat.mybluemix.net/gvrchat";
  //private token: string = environment.token;

  constructor(private http: Http) { }


  public getResponse(data: object) {
    // let data = {
    //   text : '',
    //   //lang: 'en',
    //   id: '12345',
    //   context:''
    // }

    // console.log('input to watson', data.text);
    return this.http
      .post(`${this.baseURL}`, data)
      .map(res => {
        var body = res.json();
        // if(body.result.type == 'table'){
        //   this.getTable(body.result);
        // }
        console.log(body);
        

        return body

      })
  }

  getTable(object) {
    var sample = {
      id: 689,
      text: 'SiteID 826010 is a Gilbarco station located in 7300 West Friendly Avenue, Greensboro, phone: 3365478899,is showing error/warning/down status due to:',
      context: {},
      result: {
        type: 'table',
        data: [
          { ID: 1, name: 'John', brand: 'Doe', address: 'address goes here' },
          { ID: 1, name: 'John', brand: 'Doe', address: 'address goes here' },
          { ID: 1, name: 'John', brand: 'Doe', address: 'address goes here' },
          { ID: 1, name: 'John', brand: 'Doe', address: 'address goes here' },

          
        ]
      }

    }

    if(sample.result.type == 'table'){
      return       new AdItem(TableComponent, sample.result.data
      )
    }


  }

  getAds() {
    var sample = {
      id: 689,
      text: 'SiteID 826010 is a Gilbarco station located in 7300 West Friendly Avenue, Greensboro, phone: 3365478899,is showing error/warning/down status due to:',
      context: {},
      
      
      // result: {
      //   type: 'list',
      //   data: [
      //     { ID: 846779, name: 'BO TEST SITE', brand: 'Gilbarco', address: '147 MAIN STREET, GREENSBORO, NC' },
      //     { ID: 1, name: 'site name', brand: 'brand name', address: 'address goes here' },
      //     { ID: 1, name: 'site name', brand: 'brand name', address: 'address goes here' },

          
      //   ]
      // }



      // result: {
      //   type: 'table',
      //   data: [
      //     { Position: 1, KPI: 'KPI value', State: 'gh', Count: 2 },
      //     { Position: 1, KPI: 'KPI value', State: 'ij', Count: 4 }
      //   ]
      // }
      
      
      
      
      // result: {
      //   type: 'image',
      //   data: [
      //     {source:'../../assets/images/image.jpg', alt:'Description for Image', title:'Title of the image'},
          
      //   ]
      // }


      result: {
        type: 'graph',
        data: [
          {
              label: 'First Dataset',
              data: [65, 59, 80, 81, 56, 55, 40],
              fill: false,
              borderColor: '#4bc0c0'
          },
          {
              label: 'Second Dataset',
              data: [28, 48, 40, 19, 86, 27, 90],
              fill: false,
              borderColor: '#565656'
          }
      ]
      }


    }
    if(sample.result.type == 'table'){
      return   [new AdItem(TableComponent, sample.result.data)]
      
    }else if(sample.result.type == 'list'){
      return   [new AdItem(ListComponent, sample.result.data)]

    }else if(sample.result.type == 'image'){
      return   [new AdItem(ImageComponent, sample.result.data)]
      
    }else if(sample.result.type == 'graph'){
      return   [new AdItem(GraphComponent, sample.result.data)]
      
    }else{
      return sample
    }

  }
}
