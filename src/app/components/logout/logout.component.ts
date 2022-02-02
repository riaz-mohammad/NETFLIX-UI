import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  template: `
    <app-navigation-button>Yes</app-navigation-button>
    <app-navigation-button>No</app-navigation-button>
  `,
  styles: [
    `
      :host {
        color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
        border-radius: 30px;
      }
      app-navigation-button:nth-of-type(1) {
        background: white;
        color: black;
      }
      app-navigation-button:nth-of-type(2) {
        /* background: red; */
        border: 1px solid white;
      }
       app-navigation-button {
        height: 40px;
        width: 200px;
      }
    `,
  ],
})
export class LogoutComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
