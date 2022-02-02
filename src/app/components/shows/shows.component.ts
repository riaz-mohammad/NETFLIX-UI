
import { Component, HostBinding } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


import { Position } from '../../directives/show-preview.directive';
import { backdrop, button,  description,  onDescription, preview, show} from '../../animations';
import { NetflixService, Show } from '../../services-resolvers/netflix.service';

@Component({
  selector: 'app-show',
  template: `
    <ng-container *ngFor="let show of shows$ | async">
      <app-preview
        *ngIf="show.poster_path"
        showPreview
        (showPreview)="previewPosition($event, show)"
        [preview]="show"
        [images]="netflix.IMAGES"
      >
      </app-preview>
    </ng-container>

    <ng-container *ngIf="showPreview">
      <preview-backdrop @backdrop (click)="hidePreview()"></preview-backdrop>

      <app-show-preview
        [@onDescription]="descriptionState"
        (click)="hidePreview()"
        [preview]="showForPreview"
        [image]="netflix.IMAGES + showForPreview.poster_path"
        [@preview]="{ value: 'preview', params: preview }"
      >
        <app-arrow-button (click)="description($event)" @button>
          <ng-container ngProjectAs="[arrow-button]">
            <app-button>DESCRIPTION</app-button>
            <app-arrow></app-arrow>
          </ng-container>
        </app-arrow-button>
      </app-show-preview>

      <provide-animation @description *ngIf="showDescription">
        <app-show-preview
          (click)="hidePreview()"
          [detail]="true"
          [preview]="showForPreview"
          [image]="netflix.IMAGES + showForPreview.backdrop_path"
        >
          <app-arrow-button (click)="description($event)" @button>
            <ng-container ngProjectAs="[arrow-button]">
              <app-arrow class="back"></app-arrow>
              <app-button>BACK</app-button>
            </ng-container>
          </app-arrow-button>
        </app-show-preview>
      </provide-animation>

    </ng-container>
  `,
  styles: [
    `
      :host {
        box-sizing: border-box;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 15px;
        padding: 0 150px 0 150px;
        position: relative;
        z-index: 100;
        width: 100%;
        height: 88vh;
        top: 100px;
      }

      .back {
        transform: rotate(180deg);
        margin-left: 30px;
      }
      

      app-button {
        font-size: 14px;
      }
    `,
  ],
  animations: [preview, backdrop, show, button, onDescription, description],
})
export class ShowsComponent {
  constructor(private route: ActivatedRoute, public netflix: NetflixService) {}
  shows$: Observable<Show[]> = this.route.data.pipe(map(({ shows }) => shows));
  @HostBinding('@show')
  preview = { width: '0px', height: '0px', top: '0px', left: '0px' };

  showForPreview!: Show;
  showPreview = false;
  showDescription = false;

  get descriptionState(): string {
    return this.showDescription ? 'behind' : 'front';
  }
  previewPosition(preview: Position, show: Show): void {
    this.hidePreview();
    this.preview = preview;
    this.showForPreview = show;
  }

  description(event: MouseEvent): void {
    event.stopPropagation();
    this.showDescription = !this.showDescription;
  }

  hidePreview(): void {
    if (this.showDescription) {
      this.showDescription = !this.showDescription;
      return;
    }

    this.showPreview = !this.showPreview;
  }
}
