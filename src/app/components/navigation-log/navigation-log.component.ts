import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation-log',
  template: ` <h1>NETFLIX</h1> `,
  styles: [
    `
      :host {
        display: flex;
        justify-content: flex-end;
        width: 200px;
        color: rgba(255, 0, 50, 1);
      }
      h1 {
        font-size: 30px;
        text-shadow: 5px 5px 10px black;
      }
    `,
  ],
})
export class NavigationLogComponent {}

