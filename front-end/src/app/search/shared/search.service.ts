import { Injectable, Inject } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "src/app/models/product";
import { HttpParams, HttpClient, HttpHeaders } from "@angular/common/http";
import { APP_CONFIG } from "src/app/app.config";
import { map } from "rxjs/operators";
import { SortMode } from "src/app/enums/sort-mode";
import { TranslateService, GoogleObj } from 'src/app/shared/services/translate.service';

@Injectable({
  providedIn: "root"
})
export class SearchService {
  baseUrl = this._config.baseUrl + "/_search";
  searchQuery: string;

  constructor(
    private _http: HttpClient,
    @Inject(APP_CONFIG) private _config) {}

  searchByQuery(
    searchQuery: string,
    sortMode: SortMode,
    from: number = 0,
    size: number = this._config.defaultResultsLoaded
  ): Observable<any> {
    var body = {
      from: from,
      size: size,
      aggs: {
        max_weight: { max: { field: "weight_q" } },
        min_weight: { min: { field: "weight_q" } }
      }
    };

    const bodyPriceSort = {
      from: from,
      size: size,
      sort: [{ price: "asc" }],
      aggs: {
        max_weight: { max: { field: "weight_q" } },
        min_weight: { min: { field: "weight_q" } }
      }
    };

    const params = new HttpParams().set("q", searchQuery);
    const headers = new HttpHeaders().set("Content-Type", "application/json");

    return this._http
      .post(this.baseUrl, sortMode == SortMode.Price ? bodyPriceSort : body, {
        headers: headers,
        params: params
      })
      .pipe(map((response: any) => response));
  }

  searchByQueryWithWeightFilter(
    query: string,
    weightMin: number,
    weightMax: number,
  ) {
    var body = {
      query: {
        bool: {
          must: {
            multi_match: {
              query: query,
              fields: ["page_title^3", "description", "product_name^5"]
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
        headers: new HttpHeaders().set("Content-Type", "application/json")
      })
      .pipe(map((response: any) => response));
  }

  spellingSuggestionsByQuery(searchQuery: string): Observable<any> {
    const body = {
      suggest: {
        suggest: {
          text: searchQuery,
          term: {
            field: "product_name"
          }
        }
      }
    };

    return this._http
      .post(this.baseUrl, body, {
        headers: new HttpHeaders().set("Content-Type", "application/json")
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
