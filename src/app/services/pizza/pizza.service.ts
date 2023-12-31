import { Injectable } from '@angular/core';
import { Pizza } from 'src/app/Shared/models/Pizza';
import { Ingredient } from 'src/app/Shared/models/Ingredient';

// Décorateur Injectable pour marquer la classe comme un service injectable
@Injectable({
  providedIn: 'root' // Spécification du niveau de portée du service (ici, 'root' pour une portée globale)
})
export class PizzaService {

  // Tableau statique de pizzas avec leurs détails
  pizzas: Pizza[] = [
    new Pizza('Reine', 'https://assets.afcdn.com/recipe/20210514/120317_w1024h768c1cx1060cy707.jpg',
      [new Ingredient ('jambon', 10), new Ingredient('champignons', 20), new Ingredient('olives noires', 5)]),

    new Pizza('Margherita', 'https://res.cloudinary.com/glovoapp/q_auto,f_auto/Products/gl4rlsx2yxj1tpddkzxz',
      [new Ingredient ('sauce tomate', 1), new Ingredient('mozzarella', 4), new Ingredient('basilic', 10)]),

    new Pizza('Quatre Fromages', 'https://assets.afcdn.com/recipe/20200506/110673_w1024h768c1cx3120cy2080.webp',
      [new Ingredient ('gorgonzola', 1), new Ingredient('mozzarella', 4), new Ingredient('parmesan', 10), new Ingredient('fromage de chèvre', 10)])
  ];
  constructor() { }
  
}
