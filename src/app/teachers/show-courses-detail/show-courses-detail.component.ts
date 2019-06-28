import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeacherService } from 'src/app/services/teacher.service';
import { Course } from 'src/app/models/Course';
import { Form, NgForm } from '@angular/forms';

@Component({
  selector: 'app-show-courses-detail',
  templateUrl: './show-courses-detail.component.html',
  styleUrls: ['./show-courses-detail.component.css'],
  providers: [TeacherService]
})
export class ShowCoursesDetailComponent implements OnInit {

  constructor(private router:ActivatedRoute,private teacherService:TeacherService) { }

  course:Course = new Course();
  courseStudents:any;
  number = 0;
  ngOnInit() {
    let courseId:number = Number.parseInt(this.router.snapshot.paramMap.get("courseId"));
    this.teacherService.getCourseDetail(courseId).subscribe(data=>{
      this.course = data.course;
      this.courseStudents = data.courseStudents;
      console.log(this.course);
      console.log(this.courseStudents);
    })
  }
  selectCourse(asd){
    console.log(document.getElementById(asd));
  }
}
