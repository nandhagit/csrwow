import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { NgForm } from '@angular/forms';
import { SignupService } from './signup.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user: User= new User();
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  phPattern = "[0-9]{10}$";
  constructor(private ngbActive:NgbActiveModal, private signupservice: SignupService) { }

  ngOnInit() {
  }

  saveUser(form: NgForm){
    this.signupservice.saveUser(form).subscribe(response=>{
    })
  }

}
