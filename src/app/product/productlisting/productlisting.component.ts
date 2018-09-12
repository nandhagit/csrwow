import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../productservice/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productlisting',
  templateUrl: './productlisting.component.html',
  styleUrls: ['./productlisting.component.css']
})
export class ProductlistingComponent implements OnInit {


  jutetype: any[] = [{ id: 'lsb', value: 'Long Shopping Bag' },
  { id: 'plb', value: 'Pipping Long Shopping' },
  { id: 'prb', value: 'Piping Rectangular Bag' },
  { id: 'prsb', value: 'Printed Round Shopping Bag' },
  { id: 'rsb', value: 'Rectangular Shopping Bag' },
  { id: 'rshb', value: 'Round Shopping Bag' },
  { id: 'tlb', value: 'Trapezium Lunch Bag' },
  { id: 'wbb', value: 'Water Bottle Bag' }];

  batwatype: any[] = [{ id: 'bbb', value: 'Big Batwa Bag' }];
  products: Product[];
  filter: any[] = [];
  loader: boolean = false;

  constructor(private productservice: ProductService, private router: Router) { }

  ngOnInit() {
    this.productservice.getProducts().subscribe(data => {
      this.products = data;
      console.log(this.products)
    });
  }

  filterProduct(type: string, event: Event) {
    if ((<HTMLInputElement>event.target).checked) {
      this.filter.push(type);
    } else {
      console.log(this.filter.indexOf(type))
      this.filter.splice(this.filter.indexOf(type), 1);
    }
    //this.filter.push(value);
    //console.log(value);
    console.log(this.filter);
    if (this.filter.length != 0) {
      this.productservice.filterProduct(this.filter).subscribe(data => {
        this.products = data;
      });
    } else {
      this.productservice.getProducts().subscribe(data => {
        this.products = data;
      });
    }

  }

}
