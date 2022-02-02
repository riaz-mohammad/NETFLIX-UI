import { Component } from '@angular/core';


@Component({
  selector: 'app-button',
  template: ` <button><ng-content></ng-content></button> `,
  styles: [
    `
      :host {
        display: inline-block;
        width: 150px;
        border-radius: 30px;
        font-size: 1rem;
        transition: all 500ms ease;
        font-weight: normal;
        color: white;
        box-sizing: border-box;
        
      }

      button {
        cursor: pointer;
        border: none;
        outline: none;
        width: 100%;
        height: 100%;
        background: transparent;
        font-size: inherit;
        border-radius: inherit;
        font-weight: inherit;
        color: inherit;
        position: relative;
        z-index: 3;
      }
    `,
  ],
})
export class ButtonComponent {}