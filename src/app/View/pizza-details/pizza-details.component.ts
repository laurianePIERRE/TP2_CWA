import { Component } from '@angular/core';
import { Pizza } from '../../Shared/Pizza';
import { PizzaListComponent } from '../pizza-list/pizza-list.component';

@Component({
  selector: 'app-pizza-details',
  templateUrl: './pizza-details.component.html',
  styleUrls: ['./pizza-details.component.css']
})
export class PizzaDetailsComponent {
  PizzaReine : Pizza = new Pizza("Reine","url","pizza reine");
}
