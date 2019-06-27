import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateStudentComponent } from './students/create-student/create-student.component';
import { LoginStudentComponent } from './students/login-student/login-student.component';
import { LoginedUserComponent } from './students/logined-user/logined-user.component';
import { AuthGuardService } from './services/auth-guard.service';
import { CreateTeacherComponent } from './teachers/create-teacher/create-teacher.component';
import { LoginTeacherComponent } from './teachers/login-teacher/login-teacher.component';
import { TeachersComponent } from './teachers/teachers.component';
import { CreateCourseComponent } from './teachers/create-course/create-course.component';
import { ShowCoursesComponent } from './teachers/show-courses/show-courses.component';

const routes: Routes = [
  {path:'student/add',component: CreateStudentComponent},
  {path:'student/login',component:LoginStudentComponent},
  {path:'student/home',component:LoginedUserComponent,canActivate:[AuthGuardService]},
  {path:'teacher/add',component:CreateTeacherComponent},
  {path:'teacher/login',component:LoginTeacherComponent},
  {path:'teacher/home',component:TeachersComponent,canActivate:[AuthGuardService],children:[
    {path:'createCourse',component:CreateCourseComponent,outlet:'teacherRouter'},
    {path:'showCourses',component:ShowCoursesComponent,outlet:'teacherRouter'}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[AuthGuardService]
})
export class AppRoutingModule { }
