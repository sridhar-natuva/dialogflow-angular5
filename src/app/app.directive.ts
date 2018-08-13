import { Directive , ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[app-host]'
})
export class AppDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
