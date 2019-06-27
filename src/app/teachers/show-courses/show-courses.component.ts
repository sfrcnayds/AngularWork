import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Course } from 'src/app/models/Course';

@Component({
  selector: 'app-show-courses',
  templateUrl: './show-courses.component.html',
  styleUrls: ['./show-courses.component.css'],
  providers: [CourseService]
})
export class ShowCoursesComponent implements OnInit {

  constructor(private courseService:CourseService) { }
  courses:Course[];
  jwtHelper: JwtHelperService = new JwtHelperService();
  ngOnInit() {
    let tokenValue = this.jwtHelper.decodeToken(sessionStorage.getItem('teacherToken'));
    this.courseService.getCourseByTeacherId(tokenValue.nameid).subscribe(data=>{
      this.courses = data;
      console.log(this.courses)
    });
  }
}
