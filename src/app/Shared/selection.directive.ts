import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '.appSelection'
})
export class SelectionDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.addHoverEffect();
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.removeHoverEffect();
  }

  private addHoverEffect() {
    this.renderer.addClass(this.el.nativeElement, 'pizza');
  }

  private removeHoverEffect() {
    this.renderer.removeClass(this.el.nativeElement, 'pizza');
  }
}