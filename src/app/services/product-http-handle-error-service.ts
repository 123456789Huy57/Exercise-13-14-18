import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../classes/IProduct';
import { catchError, Observable, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductHttpHandleErrorService {
  private readonly url = '/datasets/products.json';

  constructor(private readonly http: HttpClient) {}

  getProductList(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url).pipe(
      retry(3),
      catchError(this.handleError),
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'An unknown error occurred.';

    if (error.error instanceof ErrorEvent) {
      errorMessage = `Client-side error: ${error.error.message}`;
    } else {
      const serverDetails = error.error
        ? JSON.stringify(error.error)
        : 'No details available';
      errorMessage = `Error Status: ${error.status}\nStatus Text: ${error.statusText}\nURL: ${error.url}\nServer Details: ${serverDetails}`;
    }

    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}
