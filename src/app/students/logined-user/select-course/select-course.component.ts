import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Course } from 'src/app/models/Course';
import { StudentService } from 'src/app/services/student.service';
import { SelectCourse } from 'src/app/models/SelectCourse';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-course',
  templateUrl: './select-course.component.html',
  styleUrls: ['./select-course.component.css'],
  providers: [StudentService]
})
export class SelectCourseComponent implements OnInit {

  selectableCourses: Course[];
  constructor(private studentService: StudentService, private toastr: ToastrService, private router: Router) { }
  model: SelectCourse = new SelectCourse();
  ngOnInit() {
    this.studentService.getSelectableCourses().subscribe(data => {
      this.selectableCourses = data;
      console.log(this.selectableCourses);
    })
  }
  selectCourse(courseId: number) {
    this.studentService.selectCourse(courseId).subscribe(data => {
      this.toastr.success('Course Selected Successfly', 'Success');
      this.ngOnInit();
    }, error => {
      this.toastr.error('Bir hata oluştu', 'Hata');
    });
  }
}
