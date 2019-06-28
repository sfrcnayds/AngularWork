import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { tap } from 'rxjs/operators';

import { Teacher } from '../models/Teacher';

@Injectable()
export class TeacherService {

  constructor(private http: HttpClient) { }

  url: string = "https://localhost:44341/api/Teachers";


  createTeacher(teacher: Teacher) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Token'
      })
    }
    return this.http.post<Teacher>(this.url, teacher, httpOptions).pipe(
      tap(data => console.log(JSON.stringify(data)))
    );
  }

  getCourseDetail(courseId:number){
    let params = new HttpParams();
    params = params.append("courseId",courseId.toString());
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Token'
      }),
      params:params
    }
    return this.http.get<any>((this.url + "/courseDetail"),httpOptions);
    
  }
}
