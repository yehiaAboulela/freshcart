import { WishlistProduct } from './../../shared/interfaces/wishlist-product';
import { CartService } from './../../shared/services/cart.service';
import { WishListService } from './../../shared/services/wish-list.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css'],
})
export class WishListComponent implements OnInit {
  constructor(
    private WishListService: WishListService,
    private CartService: CartService
  ) {}

  wishListProducts: WishlistProduct[] = [];

  ngOnInit(): void {
    this.WishListService.getWishList().subscribe({
      next: (response) => {
        this.wishListProducts = response.data;
      },
    });
  }

  removeItem(id: any): void {
    this.WishListService.deleteProductWishList(id).subscribe({
      next: (response) => {
        if (response.status == 'success') {
          this.WishListService.getWishList().subscribe({
            next: (response) => {
              this.wishListProducts = response.data;
            },
          });
        }
      },
    });
  }
  addToCart(productId: string): void {
    this.CartService.addToCart(productId).subscribe();
  }
}
