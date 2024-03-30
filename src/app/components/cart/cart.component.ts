import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import {
  ProductResponse,
  Data,
} from './../../shared/interfaces/product-response';
import { CartService } from './../../shared/services/cart.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  constructor(private CartService: CartService, private Router: Router) {}
  cartData: any = null;
  ngOnInit(): void {
    this.CartService.getCartProducts().subscribe({
      next: (response) => {
        if (response.status == 'success') {
          this.cartData = response;
        }
      },
    });
  }

  removeItem(productId: string): void {
    this.CartService.removeCartItem(productId).subscribe({
      next: (response) => {
        if (response.status == 'success') {
          this.cartData = response;
          this.CartService.cartNumber.next(response.numOfCartItems);
        }
      },
      error: (err) => {
        // console.log(err);
      },
    });
  }

  updateItem(id: string, count: number): void {
    this.CartService.updateProduct(id, count).subscribe({
      next: (response) => {
        this.cartData = response;
      },
    });
  }

  clearCart(): void {
    this.CartService.clearCart().subscribe({
      next: (response) => {
        if (response.message == 'success') {
          this.cartData = null;
          this.CartService.cartNumber.next(0);
        }
      },
    });
  }
}
