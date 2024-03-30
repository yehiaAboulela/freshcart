import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WishListService {
  constructor(private HttpClient: HttpClient) {}

  //base url => https://route-ecommerce.onrender.com/

  token: any = { token: localStorage.getItem('eToken') };
  getWishList(): Observable<any> {
    return this.HttpClient.get(
      `https://route-ecommerce.onrender.com/api/v1/wishlist`,
      {
        headers: this.token,
      }
    );
  }
  addProductToWishList(prosuctId: any): Observable<any> {
    return this.HttpClient.post(
      `https://route-ecommerce.onrender.com/api/v1/wishlist`,
      {
        productId: prosuctId,
      },
      {
        headers: this.token,
      }
    );
  }
  deleteProductWishList(productId: any): Observable<any> {
    return this.HttpClient.delete(
      `https://route-ecommerce.onrender.com/api/v1/wishlist/${productId}`,
      {
        headers: this.token,
      }
    );
  }
}
