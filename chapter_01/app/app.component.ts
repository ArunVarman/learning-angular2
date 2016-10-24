import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: '<h1> {{greeting}} </h1>'
})
export class AppComponent {
  greeting: string;
  constructor() {
    this.greeting = "My First Angular App";
  }
}
