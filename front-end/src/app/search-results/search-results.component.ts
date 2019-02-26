import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search/shared/search.service';
import { Product } from '../models/product';
import { Router, ActivatedRoute } from '@angular/router';

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
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.searchQuery = this._searchService.getSearchQuery();
    if (!this.searchQuery) {
      this._route.paramMap.subscribe(params => {
        this.searchQuery = params.get('query');
      })
    }
    this.searchByQuery(this.searchQuery);
  }

  searchClicked() {
    this._router.navigate(['search-results', this.searchQuery]);
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
