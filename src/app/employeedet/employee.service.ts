import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }
  getDetails(): Array<{}>{
    return [
      {
        location: 'Chennai',
        phone: 9876543212,
        background: 'Fresher'
      },
      {
        location: 'Bombay',
        phone: 9876543212,
        background: 'three years experience'
      },
      {
        location: 'Goa',
        phone: 9876543212,
        background: 'Fresher'
      },
      {
        location: 'Bangalore',
        phone: 9876543212,
        background: 'Fresher'
      },
      {
        location: 'Hyderabad',
        phone: 9876543212,
        background: 'Fresher'
      }
    ]
  }
}
