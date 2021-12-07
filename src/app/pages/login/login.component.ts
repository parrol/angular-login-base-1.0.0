import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { userModel } from 'src/app/model/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  user: userModel;
  rememberUser = false;
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.user = new userModel();
    if (localStorage.getItem('user')) {
      this.user.email = localStorage.getItem('user');
      this.rememberUser = true;
    }
  }

  login(form: NgForm) {

    if (form.invalid) return;

    this.auth.login(this.user)
      .subscribe((response) => {
        console.log(response);

        if (this.rememberUser) {
          localStorage.setItem('user', this.user.email);
        }

        this.router.navigateByUrl('/home');

      }, (err) => {
        console.log(err.error.error.message);

      })

  }

}
