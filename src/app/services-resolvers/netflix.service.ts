import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';

export interface Media {
  id: number;
  backdrop_path: string;
  poster_path: string;
  popularity: number;
  overview: string;
  media_type?: string;
  title?: string;
  original_title?: string;
  release_date?: string;
  name?: string;
  original_name?: string;
  first_air_date?: string;
}

export interface Movie extends Media {
  title: string;
  original_title: string;
  release_date: string;
}

export interface Show extends Media {
  name: string;
  original_name: string;
  first_air_date: string;
}
export interface Results<T> {
  results: T;
}


@Injectable({
  providedIn: 'root',
})
export class NetflixService {
  private readonly BASE_URL = 'https://api.themoviedb.org/3';
  public readonly IMAGES = 'https://image.tmdb.org/t/p/original/';
  
  private NETFLIX_ORIGINAL_MOVIES_URL = `${this.BASE_URL}/discover/movie?api_key=${API_KEY}&with_networks=213`;
  private NETFLIX_ORIGINAL_SHOWS_URL = `${this.BASE_URL}/discover/tv?api_key=${API_KEY}&with_networks=213`;
  private NETFLIX_TRENDING_URL = `https://api.themoviedb.org/3/trending/all/week?api_key=214849890feefa84c31c1ba22d9ef072`;
  constructor(private http: HttpClient) {}

  movies(): Observable<Movie[]> {
    return this.http
      .get<Results<Movie[]>>(this.NETFLIX_ORIGINAL_MOVIES_URL)
      .pipe(
        map(({ results }) => results)
      );
  }

  shows(): Observable<Show[]> {
    return this.http
      .get<Results<Show[]>>(this.NETFLIX_ORIGINAL_SHOWS_URL)
      .pipe(
        map(({ results }) => results)
      );
  }

  trending(): Observable<Media[]> {
    return this.http.get<Results<Media[]>>(this.NETFLIX_TRENDING_URL)
      .pipe(
        map(({ results }) => results)
      );
  }
}
