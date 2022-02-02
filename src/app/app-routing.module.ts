


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MoviesComponent } from './components/movies/movies.component';
import { ShowsComponent } from './components/shows/shows.component';
import { MoviesResolver } from './services-resolvers/movies.resolver';
import { ShowsResolver } from './services-resolvers/shows.resolver';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'movies',
    component: MoviesComponent,
    resolve: {
      movies: MoviesResolver,
    },
  },
  {
    path: 'shows',
    component: ShowsComponent,
    resolve: {
      shows: ShowsResolver
    },
  },

  {
    path: 'home',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
