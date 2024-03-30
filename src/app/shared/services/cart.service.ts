import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private HttpClient: HttpClient) {}
  //base url => https://route-ecommerce.onrender.com/
  token: any = { token: localStorage.getItem('eToken') };

  cartNumber: BehaviorSubject<number> = new BehaviorSubject(0);

  addToCart(productId: string): Observable<any> {
    return this.HttpClient.post(
      `https://route-ecommerce.onrender.com/api/v1/cart`,
      { productId: productId },
      { headers: this.token }
    );
  }

  getCartProducts(): Observable<any> {
    return this.HttpClient.get(`https://ecommerce.routemisr.com/api/v1/cart`, {
      headers: this.token,
    });
  }

  removeCartItem(productId: string): Observable<any> {
    return this.HttpClient.delete(
      `https://route-ecommerce.onrender.com/api/v1/cart/${productId}`,
      { headers: this.token }
    );
  }

  updateProduct(productId: string, count: number): Observable<any> {
    return this.HttpClient.put(
      `https://route-ecommerce.onrender.com/api/v1/cart/${productId}`,
      { count: count },
      { headers: this.token }
    );
  }

  clearCart(): Observable<any> {
    return this.HttpClient.delete(
      `https://route-ecommerce.onrender.com/api/v1/cart`,
      { headers: this.token }
    );
  }

  getProductDetails(id: any): Observable<any> {
    return this.HttpClient.get(
      `https://route-ecommerce.onrender.com/api/v1/products/${id}`
    );
  }

  checkOut(id: string, userData: object): Observable<any> {
    return this.HttpClient.post(
      `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${id}?url=https://yehiaaboulela.github.io/`,
      { shippingAddress: userData },
      { headers: this.token }
    );
  }
}
