import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_CONFIG } from 'src/app/app.config';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  baseUrl = this._config.baseUrl + '/_search';
  searchQuery: string;

  constructor(
    private _http: HttpClient,
    @Inject(APP_CONFIG) private _config
  ) { }

  searchByQuery(searchQuery: string): Observable<any> {
    const params = new HttpParams().set('q', searchQuery);

    return this._http
      .get(this.baseUrl, { params: params })
      .pipe(
        map((response: any) =>
          response
        )
      );
  }

  spellingSuggestionsByQuery(searchQuery: string): Observable<any> {
    const body = {
      'suggest': {
        'suggest' : {
          'text' : searchQuery,
          'term' : {
            'field': 'product_name'
          }
        }
      }
    }

    return this._http
      .post(this.baseUrl, body, { headers: new HttpHeaders().set('Content-Type', 'application/json') })
      .pipe(
        map((response: any) =>
          response
        )
      )
  }

  public setSearchQuery(searchQuery: string) {
    this.searchQuery = searchQuery;
  }

  public getSearchQuery() {
    return this.searchQuery;
  }

}
