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

  constructor(private router: Router) { }

  ngOnInit() {

  }

  openItem(itemId: string) {
    localStorage.setItem('itemId', itemId);
    this.router.navigateByUrl('/openItem');
  }

}
