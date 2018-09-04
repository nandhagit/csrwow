import { Component, OnInit } from '@angular/core';
import {Product} from '../product';
import { ProductService} from '../productservice/product.service';

@Component({
  selector: 'app-productlisting',
  templateUrl: './productlisting.component.html',
  styleUrls: ['./productlisting.component.css']
})
export class ProductlistingComponent implements OnInit {
  
  products: Product[];

  constructor(private productservice: ProductService) { }

  ngOnInit() {
    this.productservice.getProducts().subscribe(data =>{
      this.products = data;
      console.log(this.products)
    });
  }

}
