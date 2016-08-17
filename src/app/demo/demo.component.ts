import { Component } from '@angular/core';

@Component({
  selector: 'demo',
  template: require('./demo.template.html'),
  styles: [`
    button {
      background-color: red;
      border: none;
      outline: none;
      padding: 10px;
      color: white;
      min-width: 80px;
      height: 50px;
    }
    button:disabled {
      background-color: pink;
      cursor: not-allowed;
    }
  `]
})
export class Demo {
  message = "Hello";
  isDisabled = false;

  handleClick() {
    this.isDisabled = !this.isDisabled;
  }
}
