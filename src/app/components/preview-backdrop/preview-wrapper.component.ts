import { Component} from '@angular/core';

@Component({
  selector: 'preview-backdrop',
  template: ``,
  styles: [
    `
      :host {
        display: block;
        position: absolute;
        top: -20%;
        left: 0;
        width: 100%;
        height: 125%;
        background: rgba(0, 0, 0, 0.8);
        z-index: 2;
        cursor: pointer;    
      }
    `,
  ],
})
export class previewBackdropComponent {}