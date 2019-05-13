import { Directive, Input, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appIf]'
})
export class IfDirective {
  @Input()
  set appIf(show: boolean) {
    this.vc.createEmbeddedView(
      this.template,
      { $implicit: 'Data comming from appIf' }
    );
  }

  constructor(
    private vc: ViewContainerRef,
    private template: TemplateRef<any>) { }
}
