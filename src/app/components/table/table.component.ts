import { Component, Input }  from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import { AdComponent }       from '../../ad.component';

@Component({
  templateUrl: './table.component.html',
  styleUrls: ['../../app.component.css']
  
})
export class TableComponent implements AdComponent {
  @Input() data: any[];

  // displayedColumns:string[] = ['Position', 'KPI', 'State', 'Count'];
  
  // dataSource = new MatTableDataSource(this.data);
}



// export interface table {
//   position: number;
//   KPI: string;
//   state: string;
//   count: number;
// }