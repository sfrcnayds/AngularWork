import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Student } from '../models/Student';
import {tap,catchError} from 'rxjs/operators';
@Injectable()
export class StudentService {
url:string = "https://localhost:44341/api/Students";
constructor(private http:HttpClient) { }

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
}
