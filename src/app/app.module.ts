import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';

import { NavigationLogComponent } from './components/navigation-log/navigation-log.component';
import { ActiveButtonDirective } from './directives/active-button.directive';
import { MoviesComponent } from './components/movies/movies.component';
import { ShowsComponent } from './components/shows/shows.component';
import { HomeComponent } from './components/home/home.component';
import { PreviewComponent } from './components/preview/preview.component';
import { ShowPreviewDirective } from './directives/show-preview.directive';
import { previewBackdropComponent } from './components/preview-backdrop/preview-wrapper.component';
import { LogoutComponent } from './components/logout/logout.component';
import { ShowPreviewComponent } from './components/show-preview/show-preview.component';
import { ButtonComponent } from './components/button/button.component';
import { NavigationButtonsComponent } from './components/navigation-buttons/navigation-buttons.component';

import { ArrowComponent } from './components/arrow/arrow.component';
import { ArrowButtonComponent } from './components/arrow-button/arrow-button.component';
import { DescriptionComponent } from './components/description/description.component';

import { HeaderComponent } from './components/header/header.component';





@NgModule({
  schemas: [NO_ERRORS_SCHEMA],
  declarations: [
    AppComponent,
    NavigationComponent,
    NavigationLogComponent,
    NavigationButtonsComponent,
    ButtonComponent,
    ActiveButtonDirective,
    MoviesComponent,
    ShowsComponent,
    HomeComponent,
    PreviewComponent,
    ShowPreviewDirective,
    previewBackdropComponent,
    LogoutComponent,
    ShowPreviewComponent,
    ArrowComponent,
    ArrowButtonComponent,
    DescriptionComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
