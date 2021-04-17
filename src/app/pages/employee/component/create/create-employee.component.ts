import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CompanyEmployeeModel } from '../../models';
import { EmployeeService } from '../../services/employee.service';
@Component({
    selector: 'app-create-employee',
    templateUrl: './create-employee.component.html',
    styleUrls: ['./create-employee.component.scss'],
})
export class CreateEmployeeComponent implements OnInit {

    constructor(
        public dialogRef: MatDialogRef<CreateEmployeeComponent>,
        public employeeService: EmployeeService
    ) { }

    hide = {
        overview: false,
        contact: false,
        finance: false,
        administrative: false
    }

    ngOnInit(): void { }

    closeDialog() {
        this.dialogRef.close();
    }

    createEmployee() {
        let model = new CompanyEmployeeModel();
        this.employeeService.create(model).subscribe((res) => { });
    }
}
