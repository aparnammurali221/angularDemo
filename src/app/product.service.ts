import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  result = ''

  public service: any

  constructor(private http: HttpClient) { }

  public getProduct(): Observable<any>{
    return this.http.get<any>('http://localhost:8081/api/product')
  }

  public postProduct(): Observable<any>{
    return this.http.post<any>('http://localhost:8081/api/product',{
      "Name": "Betty",
      "Desc": "WXYZ",
      "Price": 1500,
      "ManuDate": "04/22/2020",
      "ExpirDate": "04/10/2021",
      "Barcode": "ABCD"
  })
  }

  public putProduct(): Observable<any>{
    return this.http.put<any>('http://localhost:8081/api/updateProduct',{'_id': '5ea7dc75254a7c2a00ba8d68'})
  }

  public deleteProduct(): Observable<any>{
    return this.http.delete<any>('http://localhost:8081/api/deleteProduct/5ea7dc75254a7c2a00ba8d68')
  }
}