import { Component, OnInit } from '@angular/core';
import { ProductService } from '../productservice/product.service';
import { Product } from '../product';
import { LoginService } from '../../login/loginservice/login.service';

@Component({
  selector: 'app-productdisplay',
  templateUrl: './productdisplay.component.html',
  styleUrls: ['./productdisplay.component.css']
})
export class ProductdisplayComponent implements OnInit {

  product: Product;
  constructor(private productservice: ProductService, private loginservice: LoginService) { }

  ngOnInit() {
    const itemId = localStorage.getItem('itemId');
    this.productservice.getItem(itemId).subscribe(data => {
      this.product = data;
      console.log(this.product);
    });
  }

  addtocart(){
    let loggedinuser = this.loginservice.user.id;
    let product = localStorage.getItem('itemId');
    console.log(product)
    console.log(loggedinuser)
this.productservice.addtToCart(loggedinuser, product).subscribe(data=>{
  
  console.log(data)
})
  }

}
