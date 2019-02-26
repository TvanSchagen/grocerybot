import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';
import { HttpParams, HttpClient } from '@angular/common/http';
import { APP_CONFIG } from 'src/app/app.config';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  baseUrl = this._config.baseUrl + '/_search';

  constructor(
    private _http: HttpClient,
    @Inject(APP_CONFIG) private _config
  ) { }

  searchByQuery(searchQuery: string): Observable<Product[]> {
    const params = new HttpParams().set('q', searchQuery);

    return this._http
      .get(this.baseUrl, { params: params })
      .pipe(
        map((response: any) =>
          response
        )
      );
  }

}
