import { Observable, timer } from 'rxjs';
import { Media, NetflixService } from './../../services-resolvers/netflix.service';
import { Component } from '@angular/core';
import { backdrop, background, header, media } from './../../animations';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  template: `
    <ng-container *ngIf="trending$ | async as trending">
      <header-title @header>
        <h1>
          {{
            header?.name ||
              (header?.title ?? trending[0].name) ||
              trending[0].title
          }}
        </h1>
        <p>{{ header?.overview ?? trending[0].overview }}</p>
      </header-title>

      <app-header @background
        [image]="images + (header?.backdrop_path || trending[0].backdrop_path)"
      >
      </app-header>

      <home-media @media>
        <ng-container *ngFor="let media of trending">
          <app-preview
            [preview]="media"
            [images]="images"
            (mouseover)="hover(media)"
          >
          </app-preview>
        </ng-container>
      </home-media>
    </ng-container>
  `,
  styles: [
    `
      :host {
        box-sizing: border-box;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 550px 300px 500px;
        position: relative;
        height: 100%;
        z-index: 100;
      }

      header-title {
        display: flex;
        flex-direction: column;
        gap: 5px;
        position: absolute;
        width: 40%;
        height: max-content;
        left: 2%;
        top: 23%;
        color: white;
        z-index: 200;
        background: rgba(0, 0, 0, 0.4);
        padding: 1rem;
        overflow: hidden;
        border-radius: 10px;
      }

      app-header {
        grid-column: 1 / -1;
        grid-row: 1 / 3;
        position: fixed;
        z-index: -1;
      }

      home-media {
        grid-column: 1 / -1;
        grid-row: 2 / -1;
        display: grid;
        grid-template-columns: repeat(7, 200px);
        justify-content: center;
        align-content: start;
        column-gap: 10px;
        row-gap: 30px;
        position: relative;
        &::after {
          content: '';
          display: block;
          position: absolute;
          inset: 0;
          height: 115%;
          background: rgba(0, 0, 0, 0.5);
          box-shadow: 0px 0px 50px 50px rgba(0, 0, 0, 0.5); 
          z-index: -1;
        }
      }

      app-preview {
        height: 280px;
        width: 200px;
        border-radius: 10px;
      }
    `,
  ],
  animations: [header, background, media],
})
export class HomeComponent {
  constructor(private netflix: NetflixService) {}
  trending$!: Observable<Media[]>;
  images = this.netflix.IMAGES;
  header!: Media;

  ngOnInit() {
    this.trending$ = this.netflix.trending();
  }

  hover(media: Media): void {
    timer(250)
      .pipe(take(1))
      .subscribe((_) => (this.header = media));
  }
}
  

