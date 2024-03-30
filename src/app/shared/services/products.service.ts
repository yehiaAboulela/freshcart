import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private HttpClient: HttpClient) {}
  //base url => https://route-ecommerce.onrender.com/

  getAllProducts(): Observable<any> {
    return this.HttpClient.get(
      `https://route-ecommerce.onrender.com/api/v1/products`
    );
  }
}
