import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  public read: any

  constructor(public stuoject : StudentService) { 

    this.stuoject.getStudent().subscribe(
      data =>{
        console.log(data)
        this.read = data
      console.log(this.read)})
      
}
  
post(){

  this.stuoject.postStudent().subscribe(
    data =>{
      console.log(data)
    },
    err =>{
      console.log(err)
    }
  )
}

get(){

  this.stuoject.getStudent().subscribe(
    data =>{
      console.log(data)
    },
    err =>{
      console.log(err)
    }
  )
}

put(){

  this.stuoject.putStudent().subscribe(
    data =>{
      console.log(data)
    },
    err =>{
      console.log(err)
    }
  )
}

delete(){

  this.stuoject.deleteStudent().subscribe(
    data =>{
      console.log(data)
    },
    err =>{
      console.log(err)
    }
  )
}

 
  

  ngOnInit(): void {
  }

}