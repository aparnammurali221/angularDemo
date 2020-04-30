import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';



@Component({
  selector: 'app-employeedet',
  templateUrl: './employeedet.component.html',
  styleUrls: ['./employeedet.component.css']
})
export class EmployeedetComponent implements OnInit {


  det;


  constructor(private obj: EmployeeService) {

    this.det = this.obj.getDetails()
   }

  ngOnInit(): void {
  }

}
