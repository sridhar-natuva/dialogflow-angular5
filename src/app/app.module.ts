import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';

import { FormsModule }   from '@angular/forms';
//import {NgForm} from '@angular/forms';
import { HttpModule } from '@angular/http';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import { MenuItem}  from 'primeng/api';                 //api
import {GalleriaModule} from 'primeng/galleria';
import {ChartModule, SharedModule} from 'primeng/primeng';
import { AppComponent } from './app.component';
import { WatsonAPI } from './services';
import { MessageListComponent, MessageFormComponent, MessageItemComponent } from './components'
import { MaterialAppModule } from './ngmaterial.module';
import { ListComponent }   from './components/list/list.component';
import { AdBannerComponent }    from './ad-banner.component';
import { TableComponent } from './components/table/table.component';
import { ImageComponent } from './components/image/image.component'
import { GraphComponent } from "./components/graph/graph.component";
import { AdDirective }          from './ad.directive';



@NgModule({
  declarations: [
    AppComponent,
    MessageListComponent,
    MessageFormComponent,
    MessageItemComponent,
    AdBannerComponent,
    ListComponent,
    TableComponent,
    ImageComponent,
    GraphComponent,
    AdDirective,
    
    

  //  NgForm
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialAppModule,
    GalleriaModule,
    ChartModule,
    SharedModule
  ],
  providers: [
     WatsonAPI,
  ],
  entryComponents: [ ListComponent, TableComponent ,ImageComponent ,GraphComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
