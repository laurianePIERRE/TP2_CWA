import { SelectionDirective } from './selection.directive';
import { ElementRef, Renderer2 } from '@angular/core';

describe('SelectionDirective', () => {
  it('should create an instance', () => {
    const elementRef = {} as ElementRef;
    const renderer = {} as Renderer2;
    const directive = new SelectionDirective(elementRef, renderer);
    expect(directive).toBeTruthy();
  });
});
