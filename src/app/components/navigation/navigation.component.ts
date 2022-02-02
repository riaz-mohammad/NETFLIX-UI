import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Routes {
  home: string;
  movies: string;
  shows: string;
}
type Route = keyof Routes;

@Component({
  selector: 'app-navigation',
  template: `
    <nav>
      <nav-background>
        <img src="../../../assets/cool-background (1).png" />
      </nav-background>
      <app-navigation-log></app-navigation-log>
      <app-navigation-buttons>
        <ng-container ngProjectAs="[buttons]">
          <app-button
            class="active-indicator"
            [style.--left]="position"
          >
          </app-button>
          <app-button
            [routerLink]="'home'"
            [routerLinkActive]="'active'"
          >
            HOME
          </app-button>
          <app-button
            [routerLink]="'movies'"
            [routerLinkActive]="'active'"
          >
            MOVIES
          </app-button>

          <app-button
            [routerLink]="'shows'"
            [routerLinkActive]="'active'"
          >
            SHOWS
          </app-button>

          <app-button> LOGOUT </app-button>
        </ng-container>
      </app-navigation-buttons>
    </nav>
  `,
  styles: [
    `
      :host {
        display: flex;
        justify-content: center;
        align-items: flex-end;
        width: 100%;
        height: 80px;
        position: fixed;
        top: 0;
        z-index: 500;
      }

      nav-background{
        position: absolute;
        z-index: -100;
        inset: 0;
        border-radius: 30px;
        border: 1px solid rgba(255, 255, 255, 0.2);
        img {
        border-radius: 30px;
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: brightness(30%);
        }
      }



      nav {
        position: relative;
        z-index: 500;
        width: 95%;
        height: 65px;
        background: black;
        border-radius: 50px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        box-shadow: 1px 1px 10px 10px rgba(0, 0, 0, 0.5);
      }

      app-navigation-buttons {
        position: relative;
      }
    

     app-button {
       background: black;
     }

      app-button:not(:last-child) {
        border: 1px solid rgba(255, 255, 255, 0.6);
      }

      app-button:last-child {
        margin-left: 180px;
        background: rgba(255, 50, 10, 1);
        width: 100px;
        font-size: 12px;
      }
       

      .active-indicator {
        position: absolute;
        height: 100%;
        left: var(--left);
        background: white;
        transition: all 300ms ease;
        z-index: 2;
        
      }

      .active {
        color: black;
        font-weight: bold;
      }
    `,
  ],
})
export class NavigationComponent {
  constructor(private router: Router) {}
  private _position: Routes = {
    home: '0px',
    movies: '170px',
    shows: '340px',
  };

  get position(): string {
    let route = this.router.url.slice(1);
    return this._position[route as Route];
  }
}
