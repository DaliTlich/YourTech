import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Headers, RequestOptions, Response, Http } from '@angular/http';
import {map, catchError } from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {IProduit} from 'src/app/Iterfaces/iproduit';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  private urlController = 'http://localhost:8080/api/produits';
  // private headers = new Headers({'Content-type': 'application/json'});
  // private options = new RequestOptions({headers: this.headers});
  // constructor(private _http: Http) { }
  // getProducts() {
  //   return this._http.get(this.UrlController + '/produits', this.options)
  //   .pipe(map((response: Response) => response.json()))
  //   .pipe(catchError(this.errorHandler));
  // }
  // errorHandler(error: Response) {
  //   return Observable.throw(error || 'Error');
  // }
  constructor(private _http: HttpClient) {}
  getProducts() {
    return this._http.get(this.urlController);
  }

  getProductsOrd() {
    return this._http.get('http://localhost:8080/api/produitsord');
  }

  getProductsTel() {
    return this._http.get('http://localhost:8080/api/produitstel');
  }
}
