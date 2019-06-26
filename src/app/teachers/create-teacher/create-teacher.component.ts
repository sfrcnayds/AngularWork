import { Component, OnInit } from '@angular/core';
import { Teacher } from 'src/app/models/Teacher';
import { DepartmentService } from 'src/app/services/department.service';
import { Department } from 'src/app/models/Department';
import { NgForm } from '@angular/forms';
import { TeacherService } from 'src/app/services/teacher.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-teacher',
  templateUrl: './create-teacher.component.html',
  styleUrls: ['./create-teacher.component.css'],
  providers: [DepartmentService, TeacherService]
})
export class CreateTeacherComponent implements OnInit {

  model: Teacher = new Teacher();
  departments: Department[];

  constructor(private departmentService: DepartmentService
    , private teacherService: TeacherService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.departmentService.getDepartments().subscribe(data => {
      this.departments = data;
    })
  }

  createTeacher(form: NgForm) {
    console.log(form.value)
    if (form.valid) {
      this.teacherService.createTeacher(form.value).subscribe(
        res => console.log('HTTP response', res),
        err => {
          if (err.status != 400) {
            this.toastr.error('Kayıt Başarısız', 'Hata');
            return;
          }
          console.log('HTTP error', err);
          this.toastr.error('Olmayan bir mail veya numara giriniz', 'Hata')
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
