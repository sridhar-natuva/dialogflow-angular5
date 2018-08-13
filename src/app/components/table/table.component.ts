import { Component, OnInit , Input } from '@angular/core';
import { ResultComponent } from '../../result.component'

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements ResultComponent {
  @Input() data: any;
}
