import { Injectable , OnInit , Input} from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Message } from '../models';
import { environment } from '../../environments/environment';

@Injectable()
export class WatsonAPI{

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

  constructor(private http: Http){}

  public getResponse(data: object){
    // let data = {
    //   text : '',
    //   //lang: 'en',
    //   id: '12345',
    //   context:''
    // }

   // console.log('input to watson', data.text);
    return this.http
      .post(`${this.baseURL}`, data )
      .map(res => {
        var body = res.json();
        console.log(body);
        
        return body

      })
  }

  // public getHeaders(){
  //   let headers = new Headers();
  //   headers.append('Authorization', `Bearer ${this.token}`);
  //   return headers;
  // }
}
