import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {
  pizzas: Pizza[] = [
    new Pizza('Reine', 'https://assets.afcdn.com/recipe/20210514/120317_w1024h768c1cx1060cy707.jpg', 'jambon, champignons, olives noires'),
    new Pizza('Margherita', 'https://res.cloudinary.com/glovoapp/q_auto,f_auto/Products/gl4rlsx2yxj1tpddkzxz', 'sauce tomate, mozzarella, basilic'),
    new Pizza('Quatre Fromages', 'https://assets.afcdn.com/recipe/20200506/110673_w1024h768c1cx3120cy2080.webp', 'gorgonzola, mozzarella, parmesan, fromage de chèvre')
  ]
  constructor() { }
}
