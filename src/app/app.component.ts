import { Component } from '@angular/core';
import { LoginService } from './login/loginservice/login.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { ProductService } from './product/productservice/product.service';
import { LoginComponent } from './login/login/login.component';
import { SignupComponent } from './signup/signup.component';
import { MatDialogConfig, MatDialog } from '@angular/material';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'csr-wow';
  cartCount: number;

  constructor(private dialog: MatDialog, private app: LoginService, private http: HttpClient, private router: Router, private productservice: ProductService) {
  }

  getCartCount() {
    return localStorage.getItem("cartcount");
  }
  authenticated() { return this.app.authenticated; }

  loggedInUser() { return localStorage.getItem("loggedInUser"); }

  logout() {
    this.http.post('http://localhost:8080/logout', {}).pipe(
      finalize(() => {
        this.app.authenticated = false;
        this.router.navigateByUrl('/home');
      })).subscribe();
  }

  openLogin() {
    this.dialog.open(LoginComponent, {width: '700px', height: '700px'});
  }

  openCart() {
    this.router.navigateByUrl('/mycart')
  }

  openSignup(){
    this.dialog.open(SignupComponent, {width: '700px', height: '700px'})
  }
}
