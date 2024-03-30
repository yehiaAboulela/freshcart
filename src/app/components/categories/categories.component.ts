import { CatigoriesService } from './../../shared/services/catigories.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  constructor(private CatigoriesService: CatigoriesService) {}

  allCatigories: any[] = [];
  ngOnInit(): void {
    this.CatigoriesService.getAllCategories().subscribe({
      next: (response) => {
        this.allCatigories = response.data;
        console.log(response);
      },
    });
  }
}
