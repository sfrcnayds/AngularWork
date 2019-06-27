import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Student } from '../models/Student';
import {tap,catchError} from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Course } from '../models/Course';
@Injectable()
export class StudentService {
url:string = "https://localhost:44341/api/Students";
constructor(private http:HttpClient) { }
jwtHelper: JwtHelperService = new JwtHelperService();

  getStudents(){
    return this.http.get(this.url);
  }

  addStudent(student:Student){
    console.log(student);
    const httpOptions = {
      headers:new HttpHeaders({
       'Content-Type':'application/json',
       'Authorization':'Token'
      })
    }
    return this.http.post<Student>(this.url,student,httpOptions).pipe(
      tap(data=> console.log(JSON.stringify(data)))
    );
  }


  getSelectableCourses(){
    let token = sessionStorage.getItem('token');
    let headers =new HttpHeaders();
    headers = headers.append("Content-Type","application/json");
    headers = headers.append("Authorization",("Bearer " + token));
    let decodedToken = this.jwtHelper.decodeToken(token);
    let studentId = decodedToken.nameid;
    let student = new Object();
    return this.http.post<Course[]>((this.url + "/selectableCourses"),studentId,{headers:headers});
  }

  selectCourse(courseId){
    let token = sessionStorage.getItem('token');
    let headers =new HttpHeaders();
    headers = headers.append("Content-Type","application/json");
    headers = headers.append("Authorization",("Bearer " + token));
    let decodedToken = this.jwtHelper.decodeToken(token);
    let studentId = decodedToken.nameid;
    let object = {
      studentId:studentId,
      courseId:courseId
    }
    return this.http.post((this.url + "/selectCourse"),object,{headers:headers});
  }
}
