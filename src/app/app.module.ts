import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PizzaListComponent } from './View/pizza-list/pizza-list.component';
import { PizzaDetailsComponent } from './View/pizza-details/pizza-details.component';
import { HeaderComponent } from './header/header.component';
import { ContainerComponent } from './Container/container.component';
import { SelectionDirective } from './Shared/selection.directive';

@NgModule({
  declarations: [
    AppComponent,
    PizzaListComponent,
    PizzaDetailsComponent,
    HeaderComponent,
    ContainerComponent,
    SelectionDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
