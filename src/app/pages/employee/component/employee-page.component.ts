import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmployeeModel } from '../models';
import { EmployeeService } from '../services/employee.service';
import { CreateEmployeeComponent } from './create/create-employee.component';
@Component({
    selector: 'app-employee-page',
    templateUrl: './employee-page.component.html',
    styleUrls: ['./employee-page.component.scss'],
})
export class EmployeePageComponent implements OnInit {
    listEmployee = new Array<EmployeeModel>();

    constructor(
        public dialog: MatDialog,
        private sevice: EmployeeService
    ) { }

    ngOnInit() {
        this.sevice.listEmployee(1, 50).subscribe(res => {
            this.listEmployee = res.map(x => {
                return {
                    EmployeeId: x.EmployeeId,
                    UserprofileId: x.UserprofileId,
                    MediaURL: x.MediaURL,
                    LastName: x.LastName,
                    EmployeeCode: x.EmployeeCode,
                    DepartmentName: x.DepartmentName,
                    PositionName: x.PositionName,
                    Phone: x.Phone,
                    Username: x.Username,
                    checked: false
                }
            });
        })
    }

    openDialog() {
        this.dialog
            .open(CreateEmployeeComponent, {
                panelClass: 'dialog-create-employee',
            })
            .afterClosed()
            .subscribe((result) => {
                this.ngOnInit();
            });
    }
}
