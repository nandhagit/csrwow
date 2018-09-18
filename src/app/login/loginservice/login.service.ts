import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../../user';
import { ProductService } from '../../product/productservice/product.service';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    authenticated = false;
    user: User;
    constructor(private http: HttpClient, private productservice: ProductService) { }

    authenticate(credentials, callback) {

        const headers = new HttpHeaders(credentials ? {
            authorization: 'Basic ' + btoa(credentials.email + ':' + credentials.password)
        } : {});

        this.http.get('http://localhost:8080/user', { headers: headers }).subscribe(response => {
            console.log(response)
            if (response['name']) {
                this.authenticated = true;
                this.user = response['principal'];
                this.productservice.getCartCount(this.user.id).subscribe(data => {
                    localStorage.setItem("cartcount", data);
                    localStorage.setItem("loggedInUser", this.user.firstname.slice(0,1)+this.user.lastname.slice(0,1));
                })
                //console.log(this.user)
            } else {
                this.authenticated = false;
            }
            return callback && callback();
        });



    }
}
