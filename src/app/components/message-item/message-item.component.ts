import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../../models';

@Component({
  selector: 'message-item',
  templateUrl: './message-item.component.html',
  styleUrls: ['./message-item.component.css']
})
export class MessageItemComponent implements OnInit {

  @Input('message')
  private message: Message;

  constructor() { 
    console.log('in message item constructor');
  }

  ngOnInit() {
  }
  getColor(role) { 
    switch (role) {
      case 'user':
        return 'right';
      case 'chatbot':
        return 'left';
    }
  }

  getPosition(role) { 
    switch (role) {
      case 'user':
        return '-33px';
      case 'chatbot':
        return '-28px';
    }
  }


  

}
