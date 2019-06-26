import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/Student';
import { DepartmentService } from 'src/app/services/department.service';
import { Department } from 'src/app/models/Department';
import { NgForm } from '@angular/forms'
import { StudentService } from 'src/app/services/student.service';

import { ToastrService } from 'ngx-toastr';
import { tap, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css'],
  providers: [DepartmentService, StudentService]
})
export class CreateStudentComponent implements OnInit {
  constructor(private departmentService: DepartmentService, private studentService: StudentService, private toastr: ToastrService) { }

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
            this.toastr.error('Kayıt Başarısız', 'Hata');
            return;
          }
          console.log('HTTP error' , err);
          this.toastr.error('Olmayan bir mail veya numara giriniz','Hata')
         },
        () => {
          console.log('HTTP request completed.');
          this.toastr.success('Kayıt Başarılı', 'Başarılı');
          form.reset();
        });
    } else {
      this.toastr.error('Kayıt Başarısız', 'Hata');
    }
  }


}