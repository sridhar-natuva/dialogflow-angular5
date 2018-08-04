import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';

import { FormsModule }   from '@angular/forms';
//import {NgForm} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { DialogflowService } from '../app/services';
import { MessageListComponent, MessageFormComponent, MessageItemComponent } from '../app/components'
import { MaterialAppModule } from './ngmaterial.module';


@NgModule({
  declarations: [
    AppComponent,
    MessageListComponent,
    MessageFormComponent,
    MessageItemComponent,
  //  NgForm
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialAppModule
  ],
  providers: [
     DialogflowService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
