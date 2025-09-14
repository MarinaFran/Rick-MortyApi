import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CartItemComponent } from '../cart-item/cart-item.component';
import { CartServiceService } from '../cart-service.service';
import { PagedRequest } from '../models/characters-response.model';
import { CharactersResponse } from '../models/characters-response.model';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [CommonModule, CartItemComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css',
  providers: [CartServiceService],
})
export class MainLayoutComponent implements OnInit {
  constructor(private cartService: CartServiceService) {}

  request: PagedRequest = {
    pages: 1,
    next: `http://rickandmortyapi.com/api/character/?page=2`,
    prev: null,
  };
  cartItemList: CharactersResponse[] = [];

  ngOnInit(): void {
    this.loadData(this.request);
  }
  loadData(request: PagedRequest) {
    this.cartService.getAllCartItemsPaged(this.request).subscribe((data) => {
      console.log(data);
      this.cartItemList = data;
    });
  }

  getPrev() {
    this.request = {
      ...this.request,
      pages: this.request.pages - 1 > 0 ? this.request.pages - 1 : 1,
      next: `http://rickandmortyapi.com/api/character/?page=${this.request.pages}`,
      prev: `http://rickandmortyapi.com/api/character/?page=${
        this.request.pages
          ? this.request.pages - 2 > 0
            ? this.request.pages - 2
            : 1
          : 1
      }`,
    };
    this.loadData(this.request);
  }
  getNext() {
    this.request = {
      ...this.request,
      pages: this.request.pages + 1,
      next: `http://rickandmortyapi.com/api/character/?page=${
        this.request.pages + 2 > 43 ? 42 : this.request.pages + 2
      }`,
    };
    prev: `http://rickandmortyapi.com/api/character/?page=${
      this.request.pages - 1
    }`;
    this.loadData(this.request);
  }
}
