import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PizzaListComponent } from './View/pizza-list/pizza-list.component';
import { ContainerComponent } from './Container/container.component';

const routes: Routes = [
  { path: '', component: ContainerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
