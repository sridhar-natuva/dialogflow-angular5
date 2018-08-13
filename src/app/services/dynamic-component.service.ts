import { Injectable } from '@angular/core';
import {TableComponent} from '../components/table/table.component';
import {ListComponent} from '../components/list/list.component';
import {GraphComponent} from '../components/graph/graph.component';
import {ResultItem} from '../result.Item'

@Injectable()
export class DynamicComponentService {
  getComponents() {
    return [
      new ResultItem(ListComponent, {name: 'Bombasto', bio: 'Brave as they come'}),

      new ResultItem(TableComponent, {name: 'Dr IQ', bio: 'Smart as they come'}),

      new ResultItem(GraphComponent,   {headline: 'Hiring for several positions',
                                        body: 'Submit your resume today!'}),
    ];
  }
  constructor() { }
}
