import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search/shared/search.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  searchQuery: string;
  searchResults: Product[] = [];

  constructor(
    private _searchService: SearchService,
  ) { }

  ngOnInit() {
    this.searchQuery = this._searchService.getSearchQuery();

    this.searchByQuery(this.searchQuery);
  }

  searchClicked() {
    this.searchByQuery(this.searchQuery);
  }

  searchByQuery(query: string) {
    this._searchService.searchByQuery(query)
      .subscribe(
        data => {
          console.log(data);
          this.searchResults = data.hits.hits;
        },
        error => console.log(error)
      );
  }

}
