import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { EmpcontactComponent } from './empcontact/empcontact.component';
import { EmployeedetComponent } from './employeedet/employeedet.component';
import { StudentComponent } from './student/student.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductComponent } from './product/product.component'

@NgModule({
  declarations: [
    AppComponent,
    EmpcontactComponent,
    EmployeedetComponent,
    StudentComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
