import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeacherService } from 'src/app/services/teacher.service';
import { Course } from 'src/app/models/Course';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import 'jspdf';
import 'jspdf-autotable';
declare let jsPDF;

@Component({
  selector: 'app-show-courses-detail',
  templateUrl: './show-courses-detail.component.html',
  styleUrls: ['./show-courses-detail.component.css'],
  providers: [TeacherService]
})
export class ShowCoursesDetailComponent implements OnInit {

  constructor(private router: ActivatedRoute, private teacherService: TeacherService, private formBuilder: FormBuilder) { }

  studentMarkAddForms: FormGroup;

  course: Course = new Course();
  courseStudents: any;
  number = 0;
  ngOnInit() {
    let courseId: number = Number.parseInt(this.router.snapshot.paramMap.get("courseId"));
    this.teacherService.getCourseDetail(courseId).subscribe(data => {
      this.course = data.course;
      this.courseStudents = data.courseStudents;
      console.log(this.course);
      console.log(this.courseStudents);
    })
  }

  createStudentMarkAddForms() {
    let studentCourses = {}
    this.courseStudents.forEach(cs => {
      studentCourses[cs.id] = new FormControl
    });
  }

  onSubmit(courseStudentId) {
    console.log(this.studentMarkAddForms.get(courseStudentId))
  }


  downloadPDF() {
    let doc = new jsPDF();
    let docOutput = [];
    this.courseStudents.forEach(courseStudent => {
      let courseStudentInfo = [courseStudent.student.number,courseStudent.student.name,courseStudent.student.surname];
      if(courseStudent.mark) courseStudentInfo.push(courseStudent.mark);
      else courseStudentInfo.push('---');
      docOutput.push(courseStudentInfo);
    });

    doc.text(40, 20, ('Report Students in ' + this.course.name));
    doc.autoTable({
      startY: 40,
      head: [
        ['Student Number', 'Student Name', 'Student Surname', 'Mark'],
      ],
      body: docOutput,
    });
    doc.save(this.course.name + 'Students.pdf');
  }
}
