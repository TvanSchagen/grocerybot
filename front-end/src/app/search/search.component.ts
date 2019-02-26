import { SearchService } from './shared/search.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchQuery: string;
  constructor(private _searchService: SearchService) {
    this.searchQuery = '';
  }

  ngOnInit() {
  }

  searchClicked() {
    this._searchService.searchByQuery(this.searchQuery)
      .subscribe(
        data =>  console.log(data),
        error => console.log(error)
      );
  }

}
