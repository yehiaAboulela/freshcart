import { CartService } from './../../shared/services/cart.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css'],
})
export class CheckOutComponent implements OnInit {
  constructor(
    private FormBuilder: FormBuilder,
    private ActivatedRoute: ActivatedRoute,
    private CartService: CartService,
    private Router: Router
  ) {}

  cartId: any = '';
  ngOnInit(): void {
    this.ActivatedRoute.paramMap.subscribe({
      next: (data) => {
        this.cartId = data.get('id');
      },
    });
  }

  checkOutForm: FormGroup = this.FormBuilder.group({
    details: [null, [Validators.required, Validators.minLength(3)]],
    phone: [
      null,
      [Validators.required, Validators.pattern(/^01[0123][0-9]{8}$/)],
    ],
    city: [null, [Validators.required]],
  });

  handleCheckOut(): void {
    this.CartService.checkOut(this.cartId, this.checkOutForm.value).subscribe({
      next: (response) => {
        if ((response.status = 'success')) {
          open(response.session.url, 'blank');
        }
      },
    });
  }
}
