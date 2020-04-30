import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MockdetailsService {

  constructor() { }

  getDetails(): Array<{}>{
    return [
      {
        location: 'Chennai',
        phone: 9876543212,
        background: 'Fresher'
      }
    ]
  }
}
