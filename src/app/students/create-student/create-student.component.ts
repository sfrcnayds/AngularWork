import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/Student';
import { DepartmentService } from 'src/app/services/department.service';
import { Department } from 'src/app/models/Department';
import { NgForm } from '@angular/forms'
import { StudentService } from 'src/app/services/student.service';

import { ToastrService } from 'ngx-toastr';
import { tap, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css'],
  providers: [DepartmentService, StudentService]
})
export class CreateStudentComponent implements OnInit {
  constructor(private departmentService: DepartmentService, private studentService: StudentService, 
    private toastr: ToastrService,private translate:TranslateService) { }

  model: Student = new Student();

  departments: Department[];

  ngOnInit() {
    this.departmentService.getDepartments().subscribe(data => {
      this.departments = data;
    })
  }

  createStudent(form: NgForm) {
    if (form.valid) {
      this.studentService.addStudent(form.value).subscribe(
        res => console.log('HTTP response', res),
        err => {
          if(err.status != 400){
            this.toastr.error(this.translate.instant("createStudentInformation.errorMessage"), this.translate.instant("createStudentInformation.errorHeader"));
            return;
          }
          console.log('HTTP error' , err);
          this.toastr.error(this.translate.instant("createStudentInformation.existError"),this.translate.instant("createStudentInformation.errorHeader"))
         },
        () => {
          this.toastr.success(this.translate.instant("createStudentInformation.succesMessage"), this.translate.instant("createStudentInformation.succesMessageHeader"));
          form.reset();
        });
    } else {
      this.toastr.error(this.translate.instant("createStudentInformation.errorMessage"), this.translate.instant("createStudentInformation.errorHeader"));
    }
  }


}