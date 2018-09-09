import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product/productservice/product.service';
import {Product} from '../product/product';

@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.css']
})
export class MycartComponent implements OnInit {

  products: Product[];

  constructor(private productservice: ProductService) { }

  ngOnInit() {
    this.productservice.getProducts().subscribe(data => {
      this.products = data;
      console.log(this.products);
    });
  }

}
