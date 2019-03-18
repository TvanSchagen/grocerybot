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
  translateChecked: boolean;

  constructor(
    private _searchService: SearchService,
    private _translateService: TranslateService,
    private _router: Router) {

    this.searchQuery = '';
    this.translateChecked = false;
  }

  ngOnInit() {
  }

  searchClicked() {
    if (this.translateChecked) {
      const googleObject = new GoogleObj();
      googleObject.q = this.searchQuery;
      // tslint:disable-next-line:max-line-length
      const bearer_token = '';
      this._translateService
        .translate(googleObject, bearer_token)
        .subscribe(
          data => {
            const transData = data.data;
            if (transData.translations) {
              if (transData.translations.length > 0) {
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
    this._router.navigate(['/search-results', this.searchQuery]);
  }
}


