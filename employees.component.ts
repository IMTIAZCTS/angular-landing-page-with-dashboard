import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
interface Employee{
  eid:number;
  ename:string;
  esalary:number;
}

@Component({
  selector: 'app-employees',
  imports: [CommonModule],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css'
})

export class EmployeesComponent {
  employees:Employee[]=[
    {eid:1001,ename:'raju',esalary:30000.00},
    {eid:1002,ename:'sunil',esalary:40000.00},
    {eid:1003,ename:'ramesh',esalary:500000.00},
    {eid:1004,ename:'haneef',esalary:670000.00},
    {eid:1005,ename:'sudheer',esalary:780000.00}
];
updateEmployee(i:any):void{
    alert('update:'+i);
}
deleteEmployee(i:any):void{
  alert('delete:'+i);
  this.employees.splice(i,1);
}

}
