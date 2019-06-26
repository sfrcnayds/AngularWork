import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreateCourse } from '../models/CreateCourse';
import { Observable } from 'rxjs';

@Injectable()
export class CourseService {

constructor(private http:HttpClient) { }
url = "https://localhost:44341/api/courses"

createCourse(course:CreateCourse){
  return this.http.post(this.url,course).pipe();
}
}
