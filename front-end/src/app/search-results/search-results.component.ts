import { Component, OnInit, Inject } from '@angular/core';
import { SearchService } from '../search/shared/search.service';
import { Product } from '../models/product';
import { Router, ActivatedRoute } from '@angular/router';
import { APP_CONFIG } from 'src/app/app.config';
import { SortMode } from 'src/app/enums/sort-mode';

enum ViewMode {
  Regular,
  Compact
}

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

  defaultResultsLoaded = this._config.defaultResultsLoaded;

  searchQuery: string;
  queryTranslated: boolean;
  originalQuery: string;
  searchResults: Product[] = [];
  spellSuggestions: any;
  resultsReturned: number;
  resultsLoaded = 0;
  resultsTook: number;

  sliderMinValue = 0;
  sliderMaxValue = 0;

  sliderMin = 0;
  sliderMax = 0;

  sortMode: SortMode = SortMode.Relevance;
  viewMode: ViewMode = ViewMode.Regular;

  constructor(
    private _searchService: SearchService,
    private _route: ActivatedRoute,
    private _router: Router,
    @Inject(APP_CONFIG) private _config
  ) { }

  ngOnInit() {
    this.searchQuery = this._searchService.getSearchQuery();
    if (!this.searchQuery) {
      this._route.paramMap.subscribe(params => {
        this.searchQuery = params.get('query');
      });
    }
    this.searchByQuery(this.searchQuery);
    this.spellSuggestionsByQuery(this.searchQuery);
    if  (this._searchService.translated) {
      this.queryTranslated = true;
      this.originalQuery = this._searchService.originalQuery;
    }
  }

  searchClicked() {
    this._router.navigate(['search-results', this.searchQuery]);
    this.searchByQuery(this.searchQuery);
    this.spellSuggestionsByQuery(this.searchQuery);
  }

  loadMoreClicked() {
    this.loadMoreResults(this.searchQuery);
  }

  updateSort() {
    this.searchByQuery(this.searchQuery);
  }

  suggestionClicked(searchQuery: string) {
    this.searchQuery = searchQuery;
    this.searchClicked();
  }

  productClicked(url) {
    // modify the url if it's from albert heijn
    if (url.includes('ah.nl')) {
      const productUrl = url.split('url=')[1];
      url = 'http://ah.nl' + productUrl;
    }

    window.open(url);
  }

  filtersAppliedClicked() {
    this.applyFiltersAndSearch();
  }

  searchByQuery(query: string) {
    this._searchService.searchByQuery(query, this.sortMode)
      .subscribe(
        data => {
          // console.log(data);
          this.searchResults = data.hits.hits;
          // Parse results
          this.parseSearchResults();
          this.resultsReturned = data.hits.total;
          this.resultsLoaded = this._config.defaultResultsLoaded;
          this.resultsTook = data.took;
          const minVal = data.aggregations.min_weight.value;
          const maxVal = data.aggregations.max_weight.value;
          this.sliderMin = Math.round(minVal / 100) * 100;
          this.sliderMax = (Math.round(maxVal / 100) * 100) + 100;
          this.sliderMinValue = this.sliderMin;
          this.sliderMaxValue = this.sliderMax;
        },
        error => console.error(error)
      );
  }

  parseSearchResults(): any {
    this.searchResults.forEach(product => {
      product.supermarketImg = 'assets/img/' + product._source.supermarket.split(' ')[0] + '.png';

      // Domain-specific manipulations
      if (product._source.supermarket === 'vomar') {
        product._source.img_url = 'http://' + product._source.img_url;
      }
    });
  }

  applyFiltersAndSearch() {
    this._searchService.searchByQueryWithWeightFilter(this.searchQuery, this.sliderMinValue, this.sliderMaxValue).subscribe(
      data => {
        this.searchResults = data.hits.hits;
        this.resultsReturned = data.hits.total;
        this.resultsLoaded = this._config.defaultResultsLoaded;
        this.resultsTook = data.took;
        this.parseSearchResults();
      },
      error => console.error(error)
    );
  }

  spellSuggestionsByQuery(query: string) {
    this._searchService.spellingSuggestionsByQuery(query)
      .subscribe(
        data => {
          // console.log(data);
          this.spellSuggestions = data.suggest.suggest;
        },
        error => console.error(error)
      );
  }

  loadMoreResults(query: string) {
    this._searchService.searchByQuery(query, this.sortMode, this.resultsLoaded)
      .subscribe(
        data => {
          // console.log(data);
          this.searchResults = this.searchResults.concat(data.hits.hits);
          this.searchResults.forEach(product => {
            product._source.img_url = 'http://' + product._source.img_url;
            product.supermarketImg = 'assets/img/' + product._source.supermarket.split(' ')[0] + '.png';
          });
          this.resultsLoaded += this._config.defaultResultsLoaded;
          // console.log(this.searchResults);
        },
        error => console.error(error)
      );
  }

}
