import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {
  constructor(private _http: HttpClient) {}

  translate(obj: GoogleObj, token: string) {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);

    const body = {
      'source': obj.source,
      'target': obj.target,
      'format': obj.format,
      'q': obj.q
    };

    return this._http.post(url, body, {
      headers: headers
    })
    .pipe(map((res: any) => res));
  }
}

const url = 'https://translation.googleapis.com/language/translate/v2';

export class GoogleObj {
  q: string;
  readonly source: string = 'en';
  readonly target: string = 'nl';
  readonly format: string = 'text';

  constructor() {}
}
