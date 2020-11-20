import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserModel } from '../../model/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:UserModel;
  constructor() { }

  ngOnInit() {
    this.user = new UserModel();
  }
  onSubmit(f: NgForm){
    console.log(f.form.valid);
    if(!f.valid) {
      return;
    }
    console.log(f);
  }
}
