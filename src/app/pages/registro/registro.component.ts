import { ConditionalExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { userModel } from 'src/app/model/user.model';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  user: userModel;

  constructor() { }

  ngOnInit() {
    this.user = new userModel();
  }

  onSubmit(form: NgForm) {

    if (form.invalid) return;

    console.log(this.user);
    console.log(form);


  }


}
