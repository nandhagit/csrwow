import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product/productservice/product.service';
import { Product } from '../product/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: Product[];
  images = ['https://picsum.photos/1680/300', 'https://picsum.photos/1680/300', 'https://picsum.photos/1680/300'];
  constructor(private productService: ProductService) { }
  ngOnInit() {
    this.productService.getProducts().subscribe(response => {
      this.products = response;
    })
  }

}
