import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeedetComponent } from './employeedet.component';
import { EmployeeService } from './employee.service';
import { MockemployeeService } from './mock/mockemployee.service';

describe('EmployeedetComponent', () => {
  let component: EmployeedetComponent;
  let fixture: ComponentFixture<EmployeedetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeedetComponent ],
      providers: [
        { provide: EmployeeService, useClass: MockemployeeService}
      ]
    })
    .compileComponents().then(()=>{
      fixture = TestBed.createComponent(EmployeedetComponent)
      component = fixture.componentInstance
    })
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeedetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('html should contain heading ', async(()=>{
    fixture.detectChanges()
    const el = fixture.nativeElement.querySelector('h3')
    expect(el.textContent).toEqual('Employee Details missing');
  }))

  it('html should contain title', async(()=>{
    fixture.detectChanges()
    const el = fixture.nativeElement.querySelector('p')
    expect(el.textContent).toEqual('employeedet works!');
  }))

  it('should contain atleast one detail', async(() => {
    expect(component.det.length).toEqual(1);
  }));

  
});
