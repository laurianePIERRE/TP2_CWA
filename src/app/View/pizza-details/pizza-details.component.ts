import { Component, Input } from '@angular/core';
import { Pizza } from '../../Shared/models/Pizza';
import { PizzaListComponent } from '../pizza-list/pizza-list.component';
import { Ingredient } from 'src/app/Shared/models/Ingredient';

@Component({
  selector: 'app-pizza-details',
  templateUrl: './pizza-details.component.html',
  styleUrls: ['./pizza-details.component.css']
})
export class PizzaDetailsComponent {
  @Input() selectedPizza: Pizza = new Pizza('', '', [new Ingredient('',0)]) ;
}
