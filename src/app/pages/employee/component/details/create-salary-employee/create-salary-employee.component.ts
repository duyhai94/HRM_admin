import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-salary-employee',
  templateUrl: './create-salary-employee.component.html',
  styleUrls: ['./create-salary-employee.component.scss']
})
export class CreateSalaryEmployeeComponent implements OnInit {

  constructor() { }
  positions= [
    {id: 1, positionView: 'Giám đốc'},
    {id: 2, positionView: 'Phó giám đốc'},
    {id: 3, positionView: 'Nhân viên'},
  ];
  ngOnInit(): void {
  }

}
