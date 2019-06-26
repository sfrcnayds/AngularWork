import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Department } from '../models/Department';
@Injectable()
export class DepartmentService {
  url: string = "https://localhost:44341/api/departments"
  constructor(private http: HttpClient) { }

  getDepartments(): Observable<Department[]> {
    return this.http.get<Department[]>(this.url);
  }
}
