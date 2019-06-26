import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Teacher } from '../models/Teacher';
import { tap } from 'rxjs/operators';

@Injectable()
export class TeacherService {

constructor(private http:HttpClient) { }

url:string = "https://localhost:44341/api/Teachers";


createTeacher(teacher:Teacher){
  const httpOptions = {
    headers:new HttpHeaders({
     'Content-Type':'application/json',
     'Authorization':'Token'
    })
  }
  return this.http.post<Teacher>(this.url,teacher,httpOptions).pipe(
    tap(data=> console.log(JSON.stringify(data)))
  );
}
}
