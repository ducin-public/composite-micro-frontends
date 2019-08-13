import { Component, Input } from '@angular/core';

type Employee = {
  firstName: string
  lastName: string
}

@Component({
  selector: 'itcorpo-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.css']
})
export class EmployeeCardComponent {

  @Input()
  employee: Employee

  @Input()
  prefix: string

  constructor() { }

}
