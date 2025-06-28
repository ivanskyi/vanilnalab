import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-navbar',
  templateUrl: './product-navbar.component.html',
  styleUrls: ['./product-navbar.component.scss']
})
export class ProductNavbarComponent implements OnInit {
  activeCategory: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.setActiveCategoryFromUrl();
  }

  setActiveCategory(category: string): void {
    this.activeCategory = category;
  }

  private setActiveCategoryFromUrl(): void {
    const url = this.router.url;
    if (url.includes('/products/cakes')) {
      this.activeCategory = 'cakes';
    } else if (url.includes('/products/cheesecakes')) {
      this.activeCategory = 'cheesecakes';
    } else if (url.includes('/products/macarons')) {
      this.activeCategory = 'macarons';
    } else if (url.includes('/products/kids')) {
      this.activeCategory = 'kids';
    } else if (url.includes('/products/bento')) {
      this.activeCategory = 'bento';
    }
  }
}
