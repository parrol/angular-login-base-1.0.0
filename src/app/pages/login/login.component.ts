import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { userModel } from 'src/app/model/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: userModel;
  constructor() { }

  ngOnInit() {
    this.user = new userModel();

  }

  login(form: NgForm) {

    if (form.invalid) return;

    console.log('form is valid.');

    console.log(this.user.email);
    console.log(this.user.password);


  }

}
