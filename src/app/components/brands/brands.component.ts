import { BrandsService } from './../../shared/services/brands.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css'],
})
export class BrandsComponent implements OnInit {
  constructor(private BrandsService: BrandsService) {}

  allBrands: any[] = [];
  ngOnInit(): void {
    this.BrandsService.getAllBrands().subscribe({
      next: (response) => {
        this.allBrands = response.data;
      },
    });
  }
}
