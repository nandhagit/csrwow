import { Component, OnInit } from '@angular/core';
import { ProductService } from '../productservice/product.service';
import { Product } from '../product';
import { LoginService } from '../../login/loginservice/login.service';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-productdisplay',
  templateUrl: './productdisplay.component.html',
  styleUrls: ['./productdisplay.component.css']
})
export class ProductdisplayComponent implements OnInit {

  product: Product;
  private successmsg;
  private _success = new Subject<string>();
  constructor(private productservice: ProductService, private loginservice: LoginService) { }

  ngOnInit() {
    const itemId = localStorage.getItem('itemId');
    this.productservice.getItem(itemId).subscribe(data => {
      this.product = data;
      console.log(this.product);
    });
    this._success.subscribe((message) => this.successmsg = message);
    this._success.pipe(
      debounceTime(5000)
    ).subscribe(() => this.successmsg = null);
  }

  addtocart() {
    let loggedinuser = this.loginservice.user.id;
    let product = localStorage.getItem('itemId');
    this.productservice.addtToCart(loggedinuser, product).subscribe(data => {
      this.productservice.getCartCount(loggedinuser).subscribe(count => {
        localStorage.setItem("cartcount", count);
        this._success.next('Item added to cart successfully');
      })
    })
  }

}
