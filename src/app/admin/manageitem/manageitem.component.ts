import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductService } from '../../product/productservice/product.service';

@Component({
  selector: 'app-manageitem',
  templateUrl: './manageitem.component.html',
  styleUrls: ['./manageitem.component.css']
})
export class ManageitemComponent implements OnInit {

  product: any = {};

  constructor(private productService: ProductService) { }

  ngOnInit() {
  }

  saveitem(form: NgForm) {
    this.productService.saveProducts(form).subscribe(result => {
      console.log(result);
    }, error => {
      console.log(error);
    });
  }

}
