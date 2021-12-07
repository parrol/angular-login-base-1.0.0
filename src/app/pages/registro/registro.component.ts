import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { userModel } from 'src/app/model/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html'
})
export class RegistroComponent implements OnInit {

  user: userModel;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.user = new userModel();
  }

  onSubmit(form: NgForm) {

    if (form.invalid) return;

    this.auth.registerUser(this.user)
      .subscribe(response => {
        console.log(response);

        this.router.navigateByUrl('/home');
      }, (err) => {
        console.log(err.error.error.message);

      })

  }


}
