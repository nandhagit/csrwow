import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../../user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  authenticated = false;
  user: User;

  constructor(private http: HttpClient) { }

  authenticate(credentials, callback) {

    const headers = new HttpHeaders(credentials ? {
        authorization : 'Basic ' + btoa(credentials.username + ':' + credentials.password)
    } : {});

    this.http.get('http://localhost:8080/user', {headers: headers}).subscribe(response => {
        console.log(response)
        if (response['name']) {
            this.authenticated = true;
            this.user = response['principal'];
            console.log(this.user);
        } else {
            this.authenticated = false;
        }
        return callback && callback();
    });

}
}
