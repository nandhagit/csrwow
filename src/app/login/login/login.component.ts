import { Component, OnInit } from '@angular/core';
import { LoginService } from '../loginservice/login.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials = {username: '', password: ''};

  constructor(private loginservice: LoginService, private http: HttpClient, private router: Router) {
  }

  login() {
    console.log('Login>>>>>>>>>>>>>>>');
    this.loginservice.authenticate(this.credentials, () => {
        this.router.navigateByUrl('/');
    });
    return false;
  }

  ngOnInit() {
    
  }

}
