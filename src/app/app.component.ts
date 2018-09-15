import { Component } from '@angular/core';
import { LoginService } from './login/loginservice/login.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { ProductService } from './product/productservice/product.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login/login.component';
import { SignupComponent } from './signup/signup.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'csr-wow';
  cartCount: number;

  constructor(private ngbmodel: NgbModal, private app: LoginService, private http: HttpClient, private router: Router, private productservice: ProductService) {
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
    const modalRef = this.ngbmodel.open(LoginComponent);
  }

  openSignin(){
    const modalRef = this.ngbmodel.open(SignupComponent);
  }
}
