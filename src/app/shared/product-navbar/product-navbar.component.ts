import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-product-navbar',
  templateUrl: './product-navbar.component.html',
  styleUrls: ['./product-navbar.component.scss']
})
export class ProductNavbarComponent implements OnInit {
  activeCategory: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.setActiveCategoryFromUrl();
      });

    this.setActiveCategoryFromUrl();
  }

  setActiveCategory(category: string): void {
    this.activeCategory = category;
  }

  private setActiveCategoryFromUrl(): void {
    const path = this.router.url.split('?')[0];
    const categoryMatch = path.match(/\/products\/([^\/]+)/);
    this.activeCategory = categoryMatch ? categoryMatch[1] : '';
  }
}
