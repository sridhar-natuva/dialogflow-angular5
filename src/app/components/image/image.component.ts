import { Component, Input }  from '@angular/core';
//import {MatTableDataSource} from '@angular/material';
import { AdComponent }       from '../../ad.component';
//import {GalleriaModule} from 'primeng/galleria';

@Component({
  template: `
  <p-galleria [images]="data"></p-galleria>
  `,
  styleUrls: ['../../app.component.css']
  
})
export class ImageComponent implements AdComponent {
  @Input() data: any[];
}