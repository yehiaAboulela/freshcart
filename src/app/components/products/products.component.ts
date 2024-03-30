import { ToastrService } from 'ngx-toastr';
import { WishListService } from './../../shared/services/wish-list.service';
import { CartService } from './../../shared/services/cart.service';
import { Router } from '@angular/router';
import { ProductsService } from './../../shared/services/products.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  constructor(
    private ProductsService: ProductsService,
    private Router: Router,
    private CartService: CartService,
    private WishListService: WishListService,
    private ToastrService: ToastrService
  ) {}

  products: any[] = [];
  searchTerm: string = '';
  userWishList: any[] = [];
  ngOnInit(): void {
    this.ProductsService.getAllProducts().subscribe({
      next: (response) => {
        this.products = response.data;
      },
    });
  }

  addToCart(productId: string): void {
    this.CartService.addToCart(productId).subscribe({
      next: (response) => {
        this.ToastrService.success(
          'fresh cart',
          'product added to your wish list'
        );
      },
    });
  }

  goToProductDetails(id: string): void {
    this.Router.navigate([`/details/${id}`]);
  }

  addToWishList(id: any) {
    this.WishListService.addProductToWishList(id).subscribe({
      next: (response) => {
        if (response.status == 'success') {
          this.ToastrService.success(
            'fresh cart',
            'product added to your wish list'
          );
          this.userWishList = response.data;
        }
      },
    });
  }
}
