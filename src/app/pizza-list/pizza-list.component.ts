import { Component } from '@angular/core';
import { Pizza } from '../Pizza';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css']
})
export class PizzaListComponent {
public listePizza : Pizza[] = [
new Pizza("Reine","url","pizza reine"),
new Pizza("Reine","url","pizza reine"),
new Pizza("Reine","url","pizza reine")];
  constructor() {

  }
  

}
