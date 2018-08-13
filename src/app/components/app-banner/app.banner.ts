import { Component, Input, OnInit, ViewChild, ComponentFactoryResolver, OnDestroy } from '@angular/core';

import { AppDirective } from '../../app.directive';
import { ResultItem }      from '../../Result.Item';
import { ResultComponent } from '../../result.component';

@Component({
  selector: 'app-result-banner',
  template: `
              <div>
                <h3>Advertisements</h3>
                <ng-template app-host></ng-template>
              </div>
            `
})
export class AppBannerComponent implements OnInit, OnDestroy {
  @Input() results: ResultItem[];
  currentComponentIndex = -1;
  @ViewChild(AppDirective) resultHost: AppDirective;
  interval: any;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.loadComponent();
    this.getComponents();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  loadComponent() {
    this.currentComponentIndex = (this.currentComponentIndex + 1) % this.results.length;
    let ResultItem = this.results[this.currentComponentIndex];

    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(ResultItem.component);

    let viewContainerRef = this.resultHost.viewContainerRef;
    viewContainerRef.clear();

    let componentRef = viewContainerRef.createComponent(componentFactory);
    (<ResultComponent>componentRef.instance).data = ResultItem.data;
  }

  getComponents() {
    this.interval = setInterval(() => {
      this.loadComponent();
    }, 3000);
  }
}
