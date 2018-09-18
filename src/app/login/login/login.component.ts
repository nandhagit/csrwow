import { Component, OnInit } from '@angular/core';
import { LoginService } from '../loginservice/login.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatDialogRef, MatDialog } from "@angular/material";
import { SignupComponent } from '../../signup/signup.component';
import { FormGroup, AbstractControl, FormBuilder, Validators, NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  email: AbstractControl;
  password: AbstractControl;

  constructor(private matDialog: MatDialog, private dialog: MatDialogRef<LoginComponent>, private loginservice: LoginService, private http: HttpClient, private router: Router, private formbuilder: FormBuilder) {
    this.loginForm = formbuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
    this.email = this.loginForm.controls['email'];
    this.password = this.loginForm.controls['password'];
  }

  ngOnInit() {

  }
  signin(form: NgForm) {
    this.loginservice.authenticate(form, () => {
      this.router.navigateByUrl('/');
      this.close();
    });
    return false;
  }

  close() {
    this.dialog.close();
  }

  openSignup() {
    this.dialog.close('Opening Sign up');
    this.matDialog.open(SignupComponent, { width: '700px', height: '700px' })
  }

  private getEmailError(){
    return this.loginForm.controls.email.hasError('required')?'Please enter email':'';
  }

  private getPwdError(){
    return this.loginForm.controls.password.hasError('required')?'Please enter password':'';
  }

}
