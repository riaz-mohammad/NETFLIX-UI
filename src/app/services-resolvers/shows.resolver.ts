import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Show, NetflixService } from './netflix.service';

@Injectable({
  providedIn: 'root',
})
export class ShowsResolver implements Resolve<Show[]> {
  constructor(private netflix: NetflixService) {}
  resolve(): Observable<Show[]> {
    return this.netflix.shows();
  }
}
