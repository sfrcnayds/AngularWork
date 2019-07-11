import { Component, OnInit } from '@angular/core';

import { Course } from 'src/app/models/Course';
import { StudentService } from 'src/app/services/student.service';
import { SelectCourse } from 'src/app/models/SelectCourse';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-select-course',
  templateUrl: './select-course.component.html',
  styleUrls: ['./select-course.component.css'],
  providers: [StudentService]
})
export class SelectCourseComponent implements OnInit {

  selectableCourses: Course[];
  constructor(private studentService: StudentService, private toastr: ToastrService, private translate: TranslateService) { }
  model: SelectCourse = new SelectCourse();

  ngOnInit() {
    this.studentService.getSelectableCourses().subscribe(data => {
      this.selectableCourses = data;
      console.log(this.selectableCourses);
    })
  }

  selectCourse(courseId: number) {
    this.studentService.selectCourse(courseId).subscribe(data => {
      this.toastr.success(this.translate.instant("selectCourseInformation.succesMessage"), this.translate.instant("selectCourseInformation.succesMessageHeader"));
      this.ngOnInit();
    }, error => {
      this.toastr.error(this.translate.instant("selectCourseInformation.errorMessage"), this.translate.instant("selectCourseInformation.errorHeader"));
    });
  }
}
