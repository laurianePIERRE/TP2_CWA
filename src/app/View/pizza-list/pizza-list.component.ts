import { Component, Output, EventEmitter } from '@angular/core';
import { Pizza } from '../../Shared/models/Pizza';
import { Ingredient } from 'src/app/Shared/models/Ingredient';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css']
})
export class PizzaListComponent {
  @Output() pizzaSelected: EventEmitter<Pizza> = new EventEmitter<Pizza>();
  selectedPizza: Pizza | undefined;
  pizzas: Pizza[] = [
    new Pizza('Reine', 'https://assets.afcdn.com/recipe/20210514/120317_w1024h768c1cx1060cy707.jpg', 
    [new Ingredient ('jambon', 10), new Ingredient('champignons', 20), new Ingredient('olives noires', 5)]),
    
    new Pizza('Margherita', 'https://res.cloudinary.com/glovoapp/q_auto,f_auto/Products/gl4rlsx2yxj1tpddkzxz', 
    [new Ingredient ('sauce tomate', 1), new Ingredient('mozzarella', 4), new Ingredient('basilic', 10)]),
    
    new Pizza('Quatre Fromages', 'https://assets.afcdn.com/recipe/20200506/110673_w1024h768c1cx3120cy2080.webp', 
    [new Ingredient ('gorgonzola', 1), new Ingredient('mozzarella', 4), new Ingredient('parmesan', 10), new Ingredient('fromage de chèvre', 10)])
  ]
  selectPizza(event: Event, pizza: Pizza) {
    event.preventDefault();
    this.selectedPizza = pizza;
  }

  recupPizza(index: number) {
    this.selectedPizza = this.pizzas[index];
    this.pizzaSelected.emit(this.selectedPizza);
  }
  constructor() {}
    

}
