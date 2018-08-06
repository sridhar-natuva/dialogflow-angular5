import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';

@Injectable()
export class WatsonAPI {

  private baseURL: string = "https://gvrchat.mybluemix.net/gvrchat";
  //private token: string = environment.token;

  constructor(private http: Http){}

  public getResponse(query: string){
    let data = {
      text : query,
      //lang: 'en',
      id: '12345',
      context:''
    }
    return this.http
      .post(`${this.baseURL}`, data )
      .map(res => {
        console.log(res);
        return res.json()

      })
  }

  // public getHeaders(){
  //   let headers = new Headers();
  //   headers.append('Authorization', `Bearer ${this.token}`);
  //   return headers;
  // }
}
