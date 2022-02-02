import { Component } from '@angular/core';

@Component({
  selector: 'app-arrow',
  template: `
    <svg viewBox="0 0 46 23">
      <path
        d="M45.085 12.0357C45.657 11.4365 45.635 10.487 45.0357 9.91497L35.2704 0.593544C34.6712 0.0215353 33.7217 0.0436164 33.1497 0.642864C32.5777 1.24211 32.5997 2.1916 33.199 2.76361L41.8793 11.0493L33.5935 19.7296C33.0215 20.3288 33.0436 21.2783 33.6429 21.8503C34.2421 22.4223 35.1916 22.4003 35.7636 21.801L45.085 12.0357ZM1.03487 13.4996L44.0349 12.4996L43.9651 9.50041L0.965126 10.5004L1.03487 13.4996Z"
        fill="white"
      />
    </svg>
  `,
  styles: [
    ` 
      :host {
        display: inline-block;
        width: 25px;
        height: 30px;
      }
      svg {
        width: 100%;
        height: 100%;
      }
    `,
  ],
})
export class ArrowComponent {}
