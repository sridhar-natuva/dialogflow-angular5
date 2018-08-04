import { Component, OnInit, Input, AfterViewInit,AfterViewChecked, ViewChild, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { Message } from '../../models';
import { MessageItemComponent } from '../message-item/message-item.component';

@Component({
  selector: 'message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit, AfterViewInit {

  @Input('messages')
  public messages: Message[];

  @ViewChild('chatlist', { read: ElementRef }) chatList: ElementRef;
 
  @ViewChildren(MessageItemComponent, { read: ElementRef }) chatItems: QueryList<MessageItemComponent>;

  constructor() {
    console.log('in message-list constructor.. for messages list', this.messages);
   }
   @ViewChild('scrollDown',{read:ElementRef}) scrollDown:ElementRef;
  ngAfterViewInit() {
    this.chatItems.changes.subscribe(elements => {
      console.log('viewchild is', this.chatList )
      console.log('messsage list changed: ' + this.messages.length);
      this.scrollToBottom();
    });
  }

  private scrollToBottom(): void {
    try {
    //   router.events.subscribe((val) => {
    //     if (val instanceof NavigationEnd){
    //         window.scrollTo(0,0);
    //     }
    // });
      this.chatList.nativeElement.scrollTop = this.chatList.nativeElement.scrollHeight;
    window.scrollTo(0, 0);  
    console.log('scrolling down');
    }
    catch (err) {
      console.log('Could not find the "chatList" element.');
    }
  }

  ngOnInit() {
    console.log('in mesage-list component oninit method');
  }

}
