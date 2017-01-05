import { Component } from '@angular/core';

@Component({
    selector: 'beerHomepage',
    templateUrl: 'app/home/welcome.component.html'
})
export class WelcomeComponent {
  pageTitle: string = 'Beer List';
}
