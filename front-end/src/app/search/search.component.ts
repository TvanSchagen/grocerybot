import { SearchService } from './shared/search.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleObj, TranslateService } from '../shared/services/translate.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchQuery: string;
  assessorName: string;
  translateChecked: boolean;
  evaluationChecked: boolean;

  constructor(
    private _searchService: SearchService,
    private _translateService: TranslateService,
    private _router: Router) {

    this.searchQuery = '';
    this.translateChecked = false;
    this.evaluationChecked = false;
  }

  ngOnInit() {
    this._searchService.translated = false;
    this.assessorName = ' ';
  }

  searchClicked() {
    if (this.translateChecked) {
      const googleObject = new GoogleObj();
      googleObject.q = this.searchQuery;
      // tslint:disable-next-line:max-line-length
      const bearer_token = 'ya29.c.ElrUBnL0kds8P_BGi9gp8C25OaK5e3-y_EUHAqAp7gMFR__2OrqRy0REWIvui9JcDz1YeAqeGPfrAEZ6npYHdYKjdNh2p49WweZf-mwx9UOBYF5xIpwzrIq3nP0';
      this._translateService
        .translate(googleObject, bearer_token)
        .subscribe(
          data => {
            const transData = data.data;
            if (transData.translations) {
              if (transData.translations.length > 0) {
                this._searchService.originalQuery = this.searchQuery;
                this._searchService.translated = true;

                this.searchQuery = transData.translations[0].translatedText;
              }
            }
          },
          (error: any) => console.log(error),
          () => this.navigateToSearchResults()
        );
    } else {
      this.navigateToSearchResults();
    }
  }

  navigateToSearchResults() {
    this._searchService.setSearchQuery(this.searchQuery);
    this._router.navigate(['/search-results', this.searchQuery, this.evaluationChecked, this.assessorName]);
  }
}


