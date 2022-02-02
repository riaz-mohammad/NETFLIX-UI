import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation-buttons',
  template: `
    <ng-content select="[buttons]"></ng-content>
    `,
  styles: [`
    :host {
      width: 850px;
      height: 35px;
      display: flex;
      gap: 20px;
      justify-content: flex-start;
    }
  `]
})
export class NavigationButtonsComponent {}
