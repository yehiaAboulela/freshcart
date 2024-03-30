import { CatigoriesService } from './../../shared/services/catigories.service';
import { WishListService } from './../../shared/services/wish-list.service';
import { Router } from '@angular/router';
import { CartService } from './../../shared/services/cart.service';
import { ProductsService } from './../../shared/services/products.service';
import { Component, OnInit, Output } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o/public_api';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(
    private ProductsService: ProductsService,
    private CartService: CartService,
    private Router: Router,
    private WishListService: WishListService,
    private CatigoriesService: CatigoriesService,
    private ToastrService: ToastrService
  ) {}

  catigoriesOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },
    nav: true,
  };

  catigoriesMini: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
    },
    nav: true,
  };
  products: any[] = [];
  searchTerm: string = '';
  userWishList: string = '';
  catigoriesData: any = null;
  ngOnInit(): void {
    this.ProductsService.getAllProducts().subscribe({
      next: (response) => {
        this.products = response.data;
      },
    });
    this.WishListService.getWishList().subscribe({
      next: (res) => {
        this.userWishList = JSON.stringify(res.data);
      },
    });
    this.CatigoriesService.getAllCategories().subscribe({
      next: (res) => {
        this.catigoriesData = res.data;
        console.log(res.data);
      },
    });
  }

  addToCart(productId: string): void {
    this.CartService.addToCart(productId).subscribe({
      next: (response) => {
        this.ToastrService.success('fresh cart', 'product added to your cart');
        this.CartService.cartNumber.next(response.numOfCartItems);
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
