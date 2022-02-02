import { Component } from '@angular/core';

@Component({
  selector: 'app-arrow-button',
  template: ` <ng-content select="[arrow-button]"></ng-content>`,
  styles: [
    `
      :host {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 6%;
        width: 40%;
        left: 28%;
        bottom: 8%;
        position: absolute;
        outline: 1px solid transparent;
        background: rgba(0, 0, 0, 0.3);
        backdrop-filter: blur(5px);
        border-radius: 20px;
        padding-right: 20px;
        transition: all 500ms ease;
        z-index: 100;
        &:hover {
          outline-color: rgba(255, 255, 255, 0.5);
        }
      }
    `,
  ],
})
export class ArrowButtonComponent {}
