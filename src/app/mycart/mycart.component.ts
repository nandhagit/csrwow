import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product/productservice/product.service';
import {Product} from '../product/product';
import { LoginService } from '../login/loginservice/login.service';

@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.css']
})
export class MycartComponent implements OnInit {

  products: Product[];

  constructor(private productservice: ProductService, private loginService: LoginService) { }

  ngOnInit() {
   /* this.productservice.getCartItems(this.loginService.user.id).subscribe(data => {
      this.products = data;
      console.log(this.products);
    });*/
  }

}
