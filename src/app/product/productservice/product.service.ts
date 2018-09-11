import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productname = '';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any> {
    return this.http.get("http://localhost:8080/getproducts");
  }

  saveProducts(product: any): Observable<any> {
    return this.http.post("http://localhost:8080/products", product);
  }

  getItem(itemId: string): Observable<any> {
    return this.http.get("http://localhost:8080/products/" + itemId);
  }

  filterProduct(filter: any): Observable<any> {
    return this.http.get("http://localhost:8080/filterproduct", { params: { filterlist: filter } });
  }


  addtToCart(user: any, product: any): Observable<any> {
    return this.http.post("http://localhost:8080/addtocart", { user: user, product: product } );
  }

  getCartItems(userId: any): Observable<any> {
    return this.http.get("http://localhost:8080/getcartitems", { params: { user: userId } });
  }
}
