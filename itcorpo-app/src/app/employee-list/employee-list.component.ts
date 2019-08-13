import { Component, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

type Employee = {
  id: number
  firstName: string
  lastName: string
}

@Component({
  selector: 'itcorpo-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {

  @Output()
  ids = new EventEmitter<Employee["id"][]>();

  employees: Employee[]

  constructor(
    private http: HttpClient,
    private cd: ChangeDetectorRef,
  ) {
    this.http.get<Employee[]>('http://localhost:3000/employees')
      .subscribe(employees => {
        this.employees = employees
        this.cd.detectChanges()
      })

    this.ids.emit([])
  }

  private checkMap = {}

  isChecked(e: Employee){
    return this.checkMap[e.id]
  }

  toggle(e: Employee){
    this.checkMap[e.id] = !this.checkMap[e.id]

    const ids = Object.entries(this.checkMap)
      .filter(([id, checked]) => checked)
      .map(([id, checked]) => parseInt(id))
    console.log('toggled', e, ids)
    this.ids.emit(ids)
  }

}
