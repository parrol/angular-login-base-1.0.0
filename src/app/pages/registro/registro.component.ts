import { ConditionalExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { userModel } from 'src/app/model/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  user: userModel;

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.user = new userModel();
  }

  onSubmit(form: NgForm) {

    if (form.invalid) return;

    this.auth.registerUser(this.user)
      .subscribe(response => {
        console.log(response);
      }, (err) => {
        console.log(err.error.error.message);

      })

  }


}
