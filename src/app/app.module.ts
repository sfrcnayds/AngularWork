import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { NavComponent } from './nav/nav.component';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';

import { HttpClientModule, HttpClient } from '@angular/common/http'
import { CreateStudentComponent } from './students/create-student/create-student.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms'
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginStudentComponent } from './students/login-student/login-student.component';
import { LoginedUserComponent } from './students/logined-user/logined-user.component';
import { TeachersComponent } from './teachers/teachers.component';
import { CreateTeacherComponent } from './teachers/create-teacher/create-teacher.component';
import { LoginTeacherComponent } from './teachers/login-teacher/login-teacher.component';
import { CreateCourseComponent } from './teachers/create-course/create-course.component';
import { ShowCoursesComponent } from './teachers/show-courses/show-courses.component';
import { SelectCourseComponent } from './students/logined-user/select-course/select-course.component';
import { ShowCourseComponent } from './students/logined-user/show-course/show-course.component';
import { ShowCoursesDetailComponent } from './teachers/show-courses-detail/show-courses-detail.component';


import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { StudentAddMarkFormComponent } from './teachers/show-courses-detail/student-add-mark-form/student-add-mark-form.component';
@NgModule({
   declarations: [
      AppComponent,
      StudentsComponent,
      NavComponent,
      CreateStudentComponent,
      LoginStudentComponent,
      LoginedUserComponent,
      TeachersComponent,
      CreateTeacherComponent,
      LoginTeacherComponent,
      CreateCourseComponent,
      ShowCoursesComponent,
      SelectCourseComponent,
      ShowCourseComponent,
      ShowCoursesDetailComponent,
      StudentAddMarkFormComponent
   ],
   imports: [
      ReactiveFormsModule,
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule,
      BsDropdownModule.forRoot(),
      TooltipModule.forRoot(),
      ModalModule.forRoot(),
      ToastrModule.forRoot(),
      BrowserAnimationsModule,
      TranslateModule.forRoot({
         loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
         }
      })
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
   return new TranslateHttpLoader(http);
}