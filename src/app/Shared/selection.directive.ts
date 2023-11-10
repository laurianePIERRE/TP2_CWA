import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '.appSelection'
})
export class SelectionDirective {
  // Constructeur de la directive, injecte les services ElementRef et Renderer2
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  // Écouteur d'événement pour la souris qui ajoute la classe 'pizza' lors du survol
  @HostListener('mouseenter') onMouseEnter() {
    this.addHoverEffect();
  }

  // Écouteur d'événement pour la souris qui supprime la classe 'pizza' lorsqu'elle quitte
  @HostListener('mouseleave') onMouseLeave() {
    this.removeHoverEffect();
  }

  // Méthode privée pour ajouter la classe 'pizza' à l'élément, créant un effet de survol
  private addHoverEffect() {
    this.renderer.addClass(this.el.nativeElement, 'pizza');
  }

  // Méthode privée pour supprimer la classe 'pizza' de l'élément, annulant l'effet de survol
  private removeHoverEffect() {
    this.renderer.removeClass(this.el.nativeElement, 'pizza');
}

}