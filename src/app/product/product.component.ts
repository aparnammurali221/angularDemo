import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public display: any

  constructor(public service: ProductService) {

    this.service.getProduct().subscribe(
      data =>{
        this.display = data['product']
        console.log(this.display) 
      })
   }

  get(){
    this.service.getProduct().subscribe(
      data =>{console.log(data)},
      err =>{ console.log(err)}
    )
  }

  post(){
    this.service.postProduct().subscribe(
      err =>{console.log(err)}
    )
  }

  put(){
    this.service.putProduct().subscribe(
      err =>{console.log(err)}
    )
  }

  delete(){
    this.service.deleteProduct().subscribe(
      err =>{console.log(err)}
    )
  }

  ngOnInit(): void {
  }

}