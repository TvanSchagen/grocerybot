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

  searchByQuery(searchQuery: string, from: number = 0, size: number = this._config.defaultResultsLoaded): Observable<any> {
    const body = {
      'from': from, 
      'size': size
    }

    const params = new HttpParams().set('q', searchQuery);
    const headers = new HttpHeaders().set('Content-Type', 'application/json')

    return this._http
      .post(this.baseUrl, body, { headers: headers, params: params })
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
