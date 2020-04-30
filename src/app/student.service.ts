import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  result = ''

  public obj: any


  constructor(private stu: HttpClient) { }

  public getStudent(): Observable<any>{
    return this.stu.get<any>('http://localhost:3000/student')
  }

  public postStudent(): Observable<any>{
    return this.stu.post<any>('http://localhost:3000/student',{})
  }

  public putStudent(): Observable<any>{
    return this.stu.get<any>('http://localhost:3000/student',{})
  }

  public deleteStudent(): Observable<any>{
    return this.stu.get<any>('http://localhost:3000/student')
  }

}