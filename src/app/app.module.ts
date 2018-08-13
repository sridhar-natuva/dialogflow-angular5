import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';

import { FormsModule }   from '@angular/forms';
//import {NgForm} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { WatsonAPI } from './services';
import { MessageListComponent, MessageFormComponent, MessageItemComponent } from './components'
import { MaterialAppModule } from './ngmaterial.module';
import { TableComponent } from './components/table/table.component';
import { ListComponent } from './components/list/list.component';
import { GraphComponent } from './components/graph/graph.component';
import { AppDirective } from './app.directive';
import { DynamicComponentService } from './services/dynamic-component.service'



@NgModule({
  declarations: [
    AppComponent,
    MessageListComponent,
    MessageFormComponent,
    MessageItemComponent,
    TableComponent,
    ListComponent,
    GraphComponent,
    AppDirective,
  //  NgForm
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialAppModule
  ],
  providers: [
     WatsonAPI,
     DynamicComponentService
  ],
  // entryComponents: [ TableComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
