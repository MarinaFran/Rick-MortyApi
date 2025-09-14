import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css',
})
export class CartItemComponent {
  @Input() item!: {
    id: number;
    name: string;
    type: string;
    species: string;
    status: string;
    image: string;
  };
}
