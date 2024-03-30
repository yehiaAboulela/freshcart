import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BrandsService {
  constructor(private HttpClient: HttpClient) {}

  getAllBrands(): Observable<any> {
    return this.HttpClient.get(
      `https://route-ecommerce.onrender.com/api/v1/brands`
    );
  }
}
