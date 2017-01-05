import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'beer-app',
  template: `
  <div>
   <nav class='navbar navbar-default'>
    <div class='container-fluid'>
      <a class='navbar-brand pageTitle'>{{pageTitle}}</a>
      <ul class='nav navbar-nav'>
          <li><a [routerLink]="['/welcome']">Home</a></li>
          <li><a [routerLink]="['/beers']">Beer List</a></li>
      </ul>
    </div>
   </nav>
   <div class='container'>
      <router-outlet></router-outlet>
   </div>
  </div>
  `
})
export class AppComponent  {
  pageTitle = 'Beer App';
}
