import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomerHttpService {
  private _url = '/datasets/customers.json';

  constructor(private _http: HttpClient) {}

  getCustomerGroups(): Observable<any[]> {
    return this._http.get<any[]>(this._url);
  }
}
