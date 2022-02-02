import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Movie, NetflixService } from './netflix.service';

@Injectable({
  providedIn: 'root'
})
export class MoviesResolver implements Resolve<Movie[]> {
  constructor(private netflix: NetflixService) {}
  resolve(): Observable<Movie[]> {
    return this.netflix.movies();
  }
}
