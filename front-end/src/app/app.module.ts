import { SearchService } from './search/shared/search.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatButtonModule, MatInputModule, MatIconModule, MatIcon, MatCardModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchResultsComponent } from './search-results/search-results.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { APP_CONFIG, AppConfig } from './app.config';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    SearchResultsComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    FormsModule
  ],
  providers: [
    SearchService,
    {provide: APP_CONFIG, useValue: AppConfig},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
