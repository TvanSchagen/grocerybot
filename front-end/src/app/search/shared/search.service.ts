import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_CONFIG } from 'src/app/app.config';
import { map } from 'rxjs/operators';
import { SortMode } from 'src/app/enums/sort-mode';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  baseUrl = this._config.baseUrl + '/_search';
  searchQuery: string;
  translated = false; // if query translation was enabled.
  originalQuery: string; // for the cases of query translation.

  headers = new HttpHeaders()
      .set('Authorization', 'Basic ' + btoa('dim:asd123'))
      .set('Content-Type', 'application/json');

  constructor(
    private _http: HttpClient,
    @Inject(APP_CONFIG) private _config) {}

  searchByQuery(
    searchQuery: string,
    sortMode: SortMode,
    from: number = 0,
    size: number = this._config.defaultResultsLoaded
  ): Observable<any> {
    const body = {
      query: {
        bool: {
          must: {
            multi_match: {
              query: searchQuery,
              fields: ['product_name^10', 'category^3', 'page_title^2', 'description']
            }
          }
        }
      },
      from: from,
      size: size,
      aggs: {
        max_weight: { max: { field: 'weight_q' } },
        min_weight: { min: { field: 'weight_q' } }
      }
    };

    const bodyPriceSort = {
      query: {
        bool: {
          must: {
            multi_match: {
              query: searchQuery,
              fields: ['product_name^10', 'category^3', 'page_title^2', 'description']
            }
          }
        }
      },
      from: from,
      size: size,
      sort: [{ price: 'asc' }],
      aggs: {
        max_weight: { max: { field: 'weight_q' } },
        min_weight: { min: { field: 'weight_q' } }
      }
    };

    // const headers = new HttpHeaders()
    //   .set('Authorization', 'Basic dim:asd123')
    //   .set('Content-Type', 'application/json');


    return this._http
      .post(this.baseUrl, sortMode === SortMode.Price ? bodyPriceSort : body, {
        headers: this.headers,
      })
      .pipe(map((response: any) => response));
  }

  searchByQueryWithWeightFilter(
    query: string,
    weightMin: number,
    weightMax: number,
  ) {
    const body = {
      query: {
        bool: {
          must: {
            multi_match: {
              query: query,
              fields: ['product_name^10', 'category^3', 'page_title^2', 'description']
            }
          },
          filter: {
            range: {
              weight_q: {
                gte: weightMin,
                lte: weightMax
              }
            }
          }
        }
      }
    };

    return this._http
      .post(this.baseUrl, body, {
        headers: this.headers
        // headers: new HttpHeaders()
        //   .set('Authorization', 'Basic dim:asd123')
        //   .set('Content-Type', 'application/json')
      })
      .pipe(map((response: any) => response));
  }

  spellingSuggestionsByQuery(searchQuery: string): Observable<any> {
    const body = {
      suggest: {
        suggest: {
          text: searchQuery,
          term: {
            field: 'product_name'
          }
        }
      }
    };

    return this._http
      .post(this.baseUrl, body, {
          headers: this.headers
        // headers: new HttpHeaders()
        //   .set('Authorization', 'Basic dim:asd123')
        //   .set('Content-Type', 'application/json')
      })
      .pipe(map((response: any) => response));
  }

  public setSearchQuery(searchQuery: string) {
    this.searchQuery = searchQuery;
  }

  public getSearchQuery() {
    return this.searchQuery;
  }
}
