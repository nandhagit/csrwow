import { Component, OnInit } from '@angular/core';
import { LoginService } from '../loginservice/login.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials = {username: '', password: ''};

  constructor(private ngbActive: NgbActiveModal, private loginservice: LoginService, private http: HttpClient, private router: Router) {
  }

  login() {
    this.loginservice.authenticate(this.credentials, () => {
        this.router.navigateByUrl('/');
        this.ngbActive.dismiss('Logged In');
    });
    return false;
  }

  ngOnInit() {
    
  }

}
