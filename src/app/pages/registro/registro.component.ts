import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserModel } from '../../model/user.model';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  user: UserModel;

  constructor() { }

  ngOnInit() {
    this.user = new UserModel();

   }

   onSubmit(f:NgForm){
     console.log("Form enviado");
     console.log(f);
   }


}
