import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { NavComponent } from './nav/nav.component';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';

import { HttpClientModule } from '@angular/common/http'
import { CreateStudentComponent } from './students/create-student/create-student.component';
import { FormsModule } from '@angular/forms'
import { ToastrModule } from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LoginStudentComponent } from './students/login-student/login-student.component';
import { LoginedUserComponent } from './students/logined-user/logined-user.component';
import { TeachersComponent } from './teachers/teachers.component';
import { CreateTeacherComponent } from './teachers/create-teacher/create-teacher.component';
import { LoginTeacherComponent } from './teachers/login-teacher/login-teacher.component';

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
      LoginTeacherComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule,
      BsDropdownModule.forRoot(),
      TooltipModule.forRoot(),
      ModalModule.forRoot(),
      ToastrModule.forRoot(),
      BrowserAnimationsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
