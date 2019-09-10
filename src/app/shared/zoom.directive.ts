import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appZoom]'
})
export class ZoomDirective {
  @HostBinding('class.zoom-in') zoomIn = false;

  @HostListener('mouseenter') onMouseEnter() {
    this.zoomIn = true;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.zoomIn = false;
  }
}
