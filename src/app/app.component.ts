//import all necessary Angular 2 decorators, components and services
import { Component } from '@angular/core';

//App Component
@Component({
  selector: 'app',
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html'
})
export class AppComponent {

  constructor() {}

  ngOnInit() {
    console.log('Initial App...');
  }
}
