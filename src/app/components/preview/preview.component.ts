
import { Component, Input } from '@angular/core';
import { Media, Show } from '../../services-resolvers/netflix.service';

@Component({
  selector: 'app-preview',
  template: `
    <img [src]="images + preview.poster_path">
  `,
  styles: [
    `
      :host {
        box-sizing: border-box;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 150px;
        height: 220px;
        background: rgba(71, 71, 71);
        border-radius: 10px;
        cursor: pointer;
        box-shadow: 1px 1px 20px 5px rgba(0, 0, 0, 0.5);
        transition: all 400ms ease;
        &:hover{
          transform: scale(1.1);
        }
      }
      img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: inherit;
      }
    `,
  ],
})
export class PreviewComponent {
  @Input() preview!: Media;
  @Input() images!: string;
}