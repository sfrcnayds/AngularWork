import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { CreateCourse } from '../models/CreateCourse';
import { Course } from '../models/Course';

@Injectable()
export class CourseService {

  constructor(private http: HttpClient) { }
  url = "https://localhost:44341/api/courses"

  createCourse(course: CreateCourse) {
    let headers = new HttpHeaders();
    headers = headers.append("Authorization", ("Bearer " + sessionStorage.getItem('teacherToken')));
    return this.http.post(this.url, course, { headers: headers }).pipe();
  }

  getCourseByTeacherId(teacherId) {
    let headers = new HttpHeaders();
    headers = headers.append("Authorization", ("Bearer " + sessionStorage.getItem('teacherToken')));
    return this.http.get<Course[]>(this.url + "/teacherCourses?teacherId=" + teacherId, { headers: headers });
  }
}
