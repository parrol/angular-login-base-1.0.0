import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { userModel } from 'src/app/model/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: userModel;
  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.user = new userModel();

  }

  login(form: NgForm) {

    if (form.invalid) return;

    this.auth.login(this.user)
      .subscribe((response) => {
        console.log(response);

      }, (err) => {
        console.log(err.error.error.message);

      })


  }

}
