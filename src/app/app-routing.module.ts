import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpcontactComponent } from './empcontact/empcontact.component';
import { StudentComponent } from './student/student.component';
// import {EmpdetComponent} from './empdet/empdet.component';


const routes: Routes = [
  {path:'student', component: StudentComponent}
  //{path:'empcontact', component:EmpcontactComponent},
  // {path:'empdet',component:EmpdetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
