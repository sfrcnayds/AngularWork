import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { StudentService } from '../services/student.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  providers:[]})
export class NavComponent implements OnInit {
  static loginUser;
  public currentLang;
  constructor(private router:Router,private translate: TranslateService) { }
  jwtHelper: JwtHelperService = new JwtHelperService();
  ngOnInit() {
    NavComponent.loginUser = this.jwtHelper.decodeToken(sessionStorage.getItem('token'));
    if(!NavComponent.loginUser) NavComponent.loginUser = this.jwtHelper.decodeToken(sessionStorage.getItem('teacherToken'));
    this.currentLang = this.translate.currentLang;
    console.log(this.translate.currentLang);
  }
  get loginedUser(){
    return NavComponent.loginUser;
  }

  logOut(){
    NavComponent.loginUser = null;
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('teacherToken');
    this.router.navigateByUrl("/");
  }

  switchLanguage(language : string){
    this.translate.use(language);
    this.translate.currentLang = language;
    this.currentLang = language;
  }
}
