import { Component } from '@angular/core';
import { Pizza } from '../Shared/models/Pizza';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {
  selectedPizza: Pizza | undefined;
  
  // Fonction appelée lorsqu'une pizza est sélectionnée
  onPizzaSelected(pizza: Pizza) {
    this.selectedPizza = pizza;
  }
}
