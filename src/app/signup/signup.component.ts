import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { NgForm, FormControl, Validators, FormGroup, AbstractControl, FormBuilder } from '@angular/forms';
import { SignupService } from './signup.service';
import { MatDialogRef, MatDialog } from "@angular/material";
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login/login.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user: User = new User();
  signinForm: FormGroup;
  firstname: AbstractControl;
  lastname: AbstractControl;
  email: AbstractControl;
  phonenum: AbstractControl;
  password: AbstractControl;
  repassword: AbstractControl;


  constructor(private signupservice: SignupService, formBuilder: FormBuilder, private dialog:MatDialogRef<SignupComponent>, private router: Router, private matdialog: MatDialog) {
    this.signinForm = formBuilder.group({
      email: (['', Validators.compose([Validators.required, Validators.email])]),
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      phonenum: ['', Validators.compose([Validators.minLength(10), Validators.maxLength(10), Validators.pattern('[0-9]{10}$')])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
      repassword: ['', Validators.compose([Validators.required, Validators.minLength(8)])]
    }, { validator: this.skuValidator });
    this.firstname = this.signinForm.controls['firstname'];
    this.lastname = this.signinForm.controls['lastname'];
    this.email = this.signinForm.controls['email'];
    this.phonenum = this.signinForm.controls['phonenum'];
    this.password = this.signinForm.controls['password'];
    this.repassword = this.signinForm.controls['repassword'];

  }

  ngOnInit() {
  }

  private getError() {
    let email = this.signinForm.controls.email
    return email.hasError('required') ? 'You must enter a value' :
      email.hasError('email') ? 'Not a valid email' :
        '';
  }

  saveUser(form: NgForm) {
    this.signupservice.saveUser(form).subscribe(response => {
      this.signinForm.reset();
      this.dialog.close();
      this.openLogin();
    })
  }

  private getrePasswordError() {
    let repassword = this.signinForm.controls.repassword;
    return this.signinForm.hasError('nomatch') ? 'Passwords did not match' : repassword.hasError('minlength') ? 'Password should contain at least 8 characters' : repassword.hasError('required') ? 'Please enter password' : '';
  }

  private getPasswordError() {
    let password = this.signinForm.controls.repassword;
    return password.hasError('minlength') ? 'Password should contain at least 8 characters' : password.hasError('required') ? 'Please enter password' : '';
  }

  skuValidator(group: FormGroup): { [s: string]: boolean } {
    let password = group.controls.password.value;
    let repassword = group.controls.repassword.value;
    let match = password === repassword;
    console.log(match)
    if (!match) {
      return { nomatch: true }
    } else {
      return null
    }
  }

  private getPhError() {
    let phonenum = this.signinForm.controls.phonenum;
    return phonenum.hasError('pattern') ? 'Check the number you entered' : (phonenum.hasError('minlength') || phonenum.hasError('maxlength')) ? 'Phone number should be 10 digits' : phonenum.hasError('required') ? 'Enter phone number' : '';
  }

  private openLogin(){
    this.dialog.close();
    this.matdialog.open(LoginComponent, {width: '700px', height: '700px'});
  }

}
