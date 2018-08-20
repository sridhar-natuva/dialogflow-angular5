import { Injectable, OnInit, Input } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Message } from '../models';
import { environment } from '../../environments/environment';
 import { ListComponent }   from '../components/list/list.component';
import { TableComponent } from '../components/table/table.component';
import { AdItem } from '../ad-item';

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
      result: {
        type: 'list',
        data: [
          { ID: 846779, name: 'BO TEST SITE', brand: 'Gilbarco', address: '147 MAIN STREET, GREENSBORO, NC' },
          { ID: 1, name: 'site name', brand: 'brand name', address: 'address goes here' },
          { ID: 1, name: 'site name', brand: 'brand name', address: 'address goes here' },
          { ID: 1, name: 'site name', brand: 'brand name', address: 'address goes here' },
          { ID: 1, name: 'site name', brand: 'brand name', address: 'address goes here' },
          { ID: 1, name: 'site name', brand: 'brand name', address: 'address goes here' },
          { ID: 1, name: 'site name', brand: 'brand name', address: 'address goes here' },
          { ID: 1, name: 'site name', brand: 'brand name', address: 'address goes here' },
          { ID: 1, name: 'site name', brand: 'brand name', address: 'address goes here' },
          { ID: 1, name: 'site name', brand: 'brand name', address: 'address goes here' },
          { ID: 1, name: 'site name', brand: 'brand name', address: 'address goes here' },
          { ID: 1, name: 'site name', brand: 'brand name', address: 'address goes here' },
          { ID: 1, name: 'site name', brand: 'brand name', address: 'address goes here' },
          { ID: 1, name: 'site name', brand: 'brand name', address: 'address goes here' },

          
        ]
      }
      // result: {
      //   type: 'table',
      //   data: [
      //     { Position: 1, KPI: 'KPI value', State: 'ab', Count: 2 },
      //     { Position: 1, KPI: 'KPI value', State: 'cd', Count: 3 },
      //     { Position: 1, KPI: 'KPI value', State: 'ab', Count: 2 },
      //     { Position: 1, KPI: 'KPI value', State: 'cd', Count: 3 },
      //     { Position: 1, KPI: 'KPI value', State: 'ab', Count: 2 },
      //     { Position: 1, KPI: 'KPI value', State: 'cd', Count: 3 },
      //     { Position: 1, KPI: 'KPI value', State: 'ef', Count: 2 },
      //     { Position: 1, KPI: 'KPI value', State: 'gh', Count: 2 },
      //     { Position: 1, KPI: 'KPI value', State: 'ij', Count: 4 }
      //   ]
      // }
    }
    if(sample.result.type == 'table'){
      return   [new AdItem(TableComponent, sample.result.data)]
      
    }else if(sample.result.type == 'list'){
      return   [new AdItem(ListComponent, sample.result.data)]
    }else{
      return sample
    }

  }
  //   return [
  //     // new AdItem(HeroProfileComponent, 
  //     //   // {
  //     //   // name: 'Bombasto',
  //     //   //  bio: 'Brave as they come'
  //     //   // }
  //     //   {
  //     //     type :'list',
  //     //     title :'site 12345 status',
  //     //      data :  ['\n Dispenser ENCORE 17 has device M5 is showing down on fueling position 17. \n overall-system showing status down. \n Dispenser ENCORE 17 has device M5 is showing down on fueling position 18. \ overall-system showing status down'
  //     //      ]}
  //     //     ),

  //     // new AdItem(HeroProfileComponent, {
  //     //   name: 'Dr IQ',
  //     //    bio: 'Smart as they come'
  //     //   }),

  //     // new AdItem(HeroProfileComponent,   {
  //     //   type :'list',
  //     //   title : 'sites found',
  //     //   data : 
  //     //   [ SiteID: 846779 Site Name: BO TEST SITE 
  //     //     \nBrand: Gilbarco Phone Number: 3365470001 
  //     //     \nAddress: 147 MAIN STREET, GREENSBORO, NC, 27453, 

  //     //     846744 Site Name: DPG Production Site 
  //     //     \nBrand: Gilbarco Phone Number: 3365470001 
  //     //     \nAddress: 7300 West Friendly Ave, Greensboro, NC, 27420 
  //     //     \n <red>This site is showing reported issues.</red>
  //     //   ]
  //     // }),

  //     new AdItem(TableComponent,
  //       [
  //         { position: 1, KPI: 'John', state: 'Doe', count: 2 },
  //         { position: 1, KPI: 'Mike', state: 'Hussey', count: 3 },
  //         { position: 1, KPI: 'Ricky', state: 'Hans', count: 2 },
  //         { position: 1, KPI: 'Martin', state: 'Kos', count: 2 },
  //         { position: 1, KPI: 'Tom', state: 'Paisa', count: 4 }
  //       ]
  //     ),
  //   ];
  // }

}
