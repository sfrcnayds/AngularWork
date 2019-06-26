import { Component, OnInit } from '@angular/core';
import { LoginStudent } from 'src/app/models/LoginStudent';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-student',
  templateUrl: './login-student.component.html',
  styleUrls: ['./login-student.component.css'],
  providers:[AuthService]
})
export class LoginStudentComponent implements OnInit {

  model:LoginStudent = new LoginStudent()

  constructor(private authService:AuthService) { }

  ngOnInit() {
  }

  loginStudent(form:NgForm){
    this.authService.loginStudent(this.model);
  }

}
