import { HighlightSearch } from './pipes/HighlightSearchPipe';
import { SearchService } from './search/shared/search.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  MatButtonModule,
  MatInputModule,
  MatIconModule,
  MatRippleModule,
  MatCardModule,
  MatSelectModule,
  MatExpansionModule,
  MatSlideToggleModule
} from '@angular/material';
import { MatSliderModule } from '@angular/material/slider';
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
    SearchComponent,
    HighlightSearch
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
    MatRippleModule,
    MatSelectModule,
    MatSlideToggleModule,
    FormsModule,
    MatExpansionModule,
    MatSliderModule
  ],
  providers: [SearchService, { provide: APP_CONFIG, useValue: AppConfig }],
  bootstrap: [AppComponent]
})
export class AppModule {}
