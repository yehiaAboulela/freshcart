import { WishListService } from './../../shared/services/wish-list.service';
import { CartService } from './../../shared/services/cart.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  constructor(
    private ActivatedRoute: ActivatedRoute,
    private CartService: CartService,
    private WishListService: WishListService
  ) {}
  productDetails: any = {};
  userWishList: any[] = [];
  userWishListString: string = '';

  ngOnInit(): void {
    this.ActivatedRoute.paramMap.subscribe({
      next: (param) => {
        const productId: any = param.get('id');
        this.CartService.getProductDetails(productId).subscribe({
          next: (response) => {
            console.log(response.data);
            this.productDetails = response.data;
          },
        });
      },
    });
    this.WishListService.getWishList().subscribe({
      next: (res) => {
        this.userWishListString = JSON.stringify(res.data);
        this.userWishList = res.data;
      },
    });
  }
  addToCart(id: string): void {
    this.CartService.addToCart(id).subscribe({
      next: (res) => {},
      error: (err) => {},
    });
  }
  addToWishList(id: any) {
    this.WishListService.addProductToWishList(id).subscribe({
      next: (response) => {
        if (response.status == 'success') {
          this.userWishList = response.data;
          this.userWishListString = JSON.stringify(response.data);
        }
      },
    });
  }
}
