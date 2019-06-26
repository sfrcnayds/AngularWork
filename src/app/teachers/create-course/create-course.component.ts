import { Component, OnInit } from '@angular/core';
import { CreateCourse } from 'src/app/models/CreateCourse';
import { NgForm } from '@angular/forms';
import { JwtHelperService } from '@auth0/angular-jwt';
import { CourseService } from 'src/app/services/course.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css'],
  providers: [CourseService]
})
export class CreateCourseComponent implements OnInit {

  model:CreateCourse=new CreateCourse();
  jwtHelper: JwtHelperService = new JwtHelperService();
  constructor(private courseService:CourseService,private toastr:ToastrService) { }

  ngOnInit() {
  }

  createCourse(form:NgForm){
    let encodedUser = this.jwtHelper.decodeToken(sessionStorage.getItem('teacherToken'));
    this.model.teacherId = encodedUser.nameid;
    this.courseService.createCourse(this.model).subscribe(
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
        }
    );
  }

}
