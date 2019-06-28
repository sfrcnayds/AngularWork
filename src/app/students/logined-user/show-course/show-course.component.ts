import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/Course';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-show-course',
  templateUrl: './show-course.component.html',
  styleUrls: ['./show-course.component.css'],
  providers: [StudentService]
})
export class ShowCourseComponent implements OnInit {

  public courses:any[];

  constructor(private studentService:StudentService) { }

  ngOnInit() {
    this.studentService.showStudentCourses().subscribe(data => {
      console.log(data);
      this.courses = data;
    })
  }

}
