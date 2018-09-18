import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product: Product;

  currentRate = 3.3;

  images = [1, 2, 3, 4, 5].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);

  constructor(private router: Router) { }

  ngOnInit() {

  }

  openItem(itemId: string) {
    localStorage.setItem('itemId', itemId);
    this.router.navigateByUrl('/openItem');
  }


}
