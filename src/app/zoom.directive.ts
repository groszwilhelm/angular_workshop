import { Directive, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appZoom]'
})
export class ZoomDirective {
  @HostBinding('style.transition') transition = 'transform .5s';
  @HostBinding('style.transform') transform = 'scale(1);';

  @HostListener('mouseenter')
  private mouseEnter() {
    this.transform = 'scale(1.3)';
  }

  @HostListener('mouseleave')
  private mouseLeave() {
    this.transform = 'scale(1)';
  }
}
