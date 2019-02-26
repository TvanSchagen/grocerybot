import { SearchService } from './shared/search.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchQuery: string;
  constructor(
    private _searchService: SearchService,
    private _router: Router) {

    this.searchQuery = '';
  }

  ngOnInit() {
  }

  searchClicked() {
    this._searchService.setSearchQuery(this.searchQuery);
    this._router.navigate(['/search-results']);
  }

}
