import { Component, OnInit } from '@angular/core';
import { LoginTeacher } from 'src/app/models/LoginTeacher';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-teacher',
  templateUrl: './login-teacher.component.html',
  styleUrls: ['./login-teacher.component.css'],
  providers:[AuthService]
})
export class LoginTeacherComponent implements OnInit {

  model:LoginTeacher = new LoginTeacher();

  constructor(private authService:AuthService) { }

  ngOnInit() {
  }

  loginTeacher(form:NgForm){
    console.log(form.value)
    console.log(this.model)
    this.authService.loginTeacher(this.model);
  }

}
