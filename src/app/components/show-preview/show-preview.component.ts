import { Component, Input } from '@angular/core';
import { details } from '../../animations';

import { Show } from '../../services-resolvers/netflix.service';

@Component({
  selector: 'app-show-preview',
  template: `
    <img [src]="image" />
    <ng-content></ng-content>
    <show-description *ngIf="detail" @details>
      <h2>{{ preview.title || preview.name }}</h2>
      <p>{{ preview.overview }}</p>
    </show-description>
  `,
  styles: [
    `
      :host {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 0.2fr 1fr 0.2fr;
        gap: 5px;
        height: 100%;
        width: 30%;
        position: absolute;
        top: 0;
        left: 538px;
        box-shadow: 2px 2px 50px 5px rgba(0, 0, 0, 0.4);
        border-radius: 20px;
        cursor: pointer;
        z-index: 100;
      }

      show-description {
        grid-column: 1 / -1;
        grid-row: 1 / -1;
        background: rgba(0, 0, 0, 0.3);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;
        color: white;
        font-size: 18px;
        p {
          width: 80%;
        }
      }
      img {
        grid-column: 1 / -1;
        grid-row: 1 / -1;
        border-radius: inherit;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    `,
  ],
  animations: [details],
})
export class ShowPreviewComponent {
  @Input() detail!: boolean;
  @Input() preview!: Show;
  @Input() image!: string;
}

  
