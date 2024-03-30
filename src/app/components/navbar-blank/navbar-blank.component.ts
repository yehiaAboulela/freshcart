import { BehaviorSubject } from 'rxjs';
import { CartService } from './../../shared/services/cart.service';
import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-blank',
  templateUrl: './navbar-blank.component.html',
  styleUrls: ['./navbar-blank.component.css'],
})
export class NavbarBlankComponent implements OnInit {
  constructor(private Router: Router, private CartService: CartService) {}
  numCartItems: number = 0;
  ngOnInit(): void {
    this.CartService.cartNumber.subscribe({
      next: (data) => {
        this.numCartItems = data;
      },
    });

    this.CartService.getCartProducts().subscribe({
      next: (response) => {
        this.numCartItems = response.numOfCartItems;
      },
    });
  }

  handleLogout(): void {
    localStorage.removeItem('eToken');
    this.Router.navigate(['/login']);
  }
}
