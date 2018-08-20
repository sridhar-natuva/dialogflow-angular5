import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';

import { FormsModule }   from '@angular/forms';
//import {NgForm} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { WatsonAPI } from './services';
import { MessageListComponent, MessageFormComponent, MessageItemComponent } from './components'
import { MaterialAppModule } from './ngmaterial.module';
import { ListComponent }   from './components/list/list.component';
import { AdBannerComponent }    from './ad-banner.component';
import { TableComponent } from './components/table/table.component';
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
    AdDirective
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
  ],
  entryComponents: [ ListComponent, TableComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
