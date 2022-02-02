import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header>
      <img [src]="image" />
    </header>
  `,
  styles: [
    `
      header,
      img {
        width: 100%;
        height: 100%;
      }
      img {
        object-fit: cover;
      }

      header {
        position: relative;
      }

    `,
  ],
})
export class HeaderComponent {
  @Input() image!: string;
}
