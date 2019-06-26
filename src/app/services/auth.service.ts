import { Injectable } from '@angular/core';
import { LoginStudent } from '../models/LoginStudent';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { JwtHelperService  } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Student } from '../models/Student';
import { NavComponent } from '../nav/nav.component';
import { Teacher } from '../models/Teacher';
import { LoginTeacher } from '../models/LoginTeacher';
@Injectable()
export class AuthService {
  constructor(private httpClient: HttpClient, private router: Router, private toaster: ToastrService) { }
  studentLoginUrl = "https://localhost:44341/api/auth/loginStudent"
  teacherLoginUrl = "https://localhost:44341/api/auth/loginTeacher"
  userToken: any;
  decodedToken: any;
  jwtHelper: JwtHelperService = new JwtHelperService();
  loginStudent(loginStudent: LoginStudent) {
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    this.httpClient.post(this.studentLoginUrl, loginStudent, { headers: headers }).subscribe(data => {
      this.saveToken(data);
      this.userToken = data;
      this.decodedToken = this.jwtHelper.decodeToken(data.toString());
      this.router.navigateByUrl('/student/home');
      this.toaster.success('Başarılı Giriş', 'Hoş Geldiniz!');
      NavComponent.loginUser = this.decodedToken;
    },error => {
      this.toaster.error('Hatalı kullanıcı adı veya şifre','Hata');
      loginStudent = new Student();
    });
  }

  loginTeacher(loginTeacher:LoginTeacher){
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    this.httpClient.post(this.teacherLoginUrl, loginTeacher, { headers: headers }).subscribe(data => {
      this.saveTeacher(data);
      this.userToken = data;
      this.decodedToken = this.jwtHelper.decodeToken(data.toString());
      this.router.navigateByUrl('/teacher/home');
      this.toaster.success('Başarılı Giriş', 'Hoş Geldiniz!');
      NavComponent.loginUser = this.decodedToken;
    },error => {
      this.toaster.error('Hatalı kullanıcı adı veya şifre','Hata');
      loginTeacher = new Teacher();
    });
  }

  saveToken(token) {
    sessionStorage.setItem('token', token)
  }

  saveTeacher(token){
    sessionStorage.setItem('teacherToken',token);
  }

  logOut(){
    this.userToken = null;
    this.decodedToken = null;
    sessionStorage.removeItem('token');
  }

}
