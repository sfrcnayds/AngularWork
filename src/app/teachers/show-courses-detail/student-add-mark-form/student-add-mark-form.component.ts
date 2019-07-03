import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StudentService } from 'src/app/services/student.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-student-add-mark-form',
  templateUrl: './student-add-mark-form.component.html',
  styleUrls: ['./student-add-mark-form.component.css'],
  providers: [StudentService]
})
export class StudentAddMarkFormComponent implements OnInit {

  @Input('courseStudentId') courseStudentId: number;

  form:FormGroup;
  constructor(private studentService:StudentService,private toastr: ToastrService) { }

  ngOnInit() {
    this.form = new FormGroup({
      Mark : new FormControl('',Validators.max(100)),
      courseStudentId : new FormControl('')
    })
  }

  onSubmit(){
    let object = this.form.value;
    object.courseStudentId = this.courseStudentId;
    console.log(object)
    this.studentService.addCourseMark(object).subscribe(data=>{
      this.toastr.success('Not Ekleme Başarılı','Başarılı');
    },error => {
      this.toastr.error('Bilinmedik Bir Hata Oluştu!','Hata')
    });
  }

}
