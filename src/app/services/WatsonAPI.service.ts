import { Injectable, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular//common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Message } from '../models';
import { environment } from '../../environments/environment';
 import { ListComponent }   from '../components/list/list.component';
import { TableComponent } from '../components/table/table.component';
import { AdItem } from '../ad-item';
import { ImageComponent } from "../components/image/image.component";
import { GraphComponent } from "../components/graph/graph.component";

interface watsonInput {
  id :number,
  text : string,
  context : object
}

@Injectable()
export class WatsonAPI {

  public API_response11:object;
  private baseURL: string = "https://gvrchat.mybluemix.net/gvrchat";
 // configUrl = '../assets/API_response.json';
  constructor(private http: HttpClient) { }


  public getResponse(data: object){
    return this.http.post<watsonInput>(`${this.baseURL}`, data)

  }

  getTable(object) {
    var sample = {
      id: 689,
      text: 'SiteID 826010 is a Gilbarco station located in 7300 West Friendly Avenue, Greensboro, phone: 3365478899,is showing error/warning/down status due to:',
      context: {},
      result: {
        type: 'list1',
        data: [
          { key1: "ENCORE dispenser  position 1 has the FLEXPAY II fueling position 2 has (M5 device id 44548) has status down with a cause of SSOM LOST CONNECTION TO SPOT.", key2 :"Component display is in a down state",key3:"Component pinpad is in a down state",key4:"Component printer is in a down state",userinput:"site id 434234" },
          { key1: "ENCORE dispenser  position 1 has the FLEXPAY II fueling position 2 has (M5 device id 44548) has status down with a cause of SSOM LOST CONNECTION TO SPOT.", key2 :"Component display is in a down state",key3:"Component pinpad is in a down state",key4:"Component printer is in a down state",userinput:"site id 434234" },
          
          //{ ID: 1, name: 'John', brand: 'Doe', address: 'address goes here' },

          
        ]
      }

    }

    if(sample.result.type == 'table'){
      return       new AdItem(TableComponent, sample.result.data)
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
           {userinput:"site id 434234", key1: "SiteId: 846777  Name: BO TEST SITE brand: Gilbarco", key2 :" , address: '147 MAIN STREET, GREENSBORO, NC",key3:"phone:3432423",key4:"this site is showing reported isses" },
           {userinput:"site id 434234" , key1: "SiteId: 846778  Name: BO TEST SITE brand: Gilbarco", key2 :" , address: '147 MAIN STREET, GREENSBORO, NC",key3:"phone:3432423"},
           {userinput:"site id 434234", key1: "SiteId: 846779  Name: BO TEST SITE brand: Gilbarco", key2 :" , address: '147 MAIN STREET, GREENSBORO, NC",key3:"phone:3432423" },
          
          

          
        ]
      }



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


      // result: {
      //   type: 'graph',
      //   data: {
      //     labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      //     datasets: [
      //         {
      //             label: 'First Dataset',
      //             data: [65, 59, 80, 81, 56, 55, 40],
      //             fill: false,
      //             borderColor: '#4bc0c0'
      //         },
      //         {
      //             label: 'Second Dataset',
      //             data: [28, 48, 40, 19, 86, 27, 90],
      //             fill: false,
      //             borderColor: '#565656'
      //         }
      //     ]
      // }
      // }


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
