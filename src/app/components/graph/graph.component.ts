import { Component, Input }  from '@angular/core';
//import {MatTableDataSource} from '@angular/material';
import { AdComponent }       from '../../ad.component';
import {GalleriaModule} from 'primeng/galleria';

@Component({
  template: `
  <p-chart type="line" [data]='data'  ></p-chart>
  `,
  styleUrls: ['../../app.component.css']
  
})
export class GraphComponent implements AdComponent {
  @Input() data: any;
}