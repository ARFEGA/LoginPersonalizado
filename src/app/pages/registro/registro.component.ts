import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserModel } from '../../model/user.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  user: UserModel;

  constructor(private serviceFirebase: AuthService) { }

  ngOnInit() {
    this.user = new UserModel();

   }

   onSubmit(f: NgForm){
      if (!f.valid) {
        return;
      }
      this.serviceFirebase.singUp(this.user).subscribe(resp => {
        console.log(resp);
      });
   }


}
