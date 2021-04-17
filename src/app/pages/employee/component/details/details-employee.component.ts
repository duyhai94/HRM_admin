import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { FormatDateService } from 'src/app/shared/services/format-date.service';
import Swal from 'sweetalert2';
import { EmployeeService } from '../../services/employee.service';
import { CreateSalaryEmployeeComponent } from './create-salary-employee/create-salary-employee.component';
@Component({
    selector: 'app-details-employee',
    templateUrl: './details-employee.component.html',
    styleUrls: ['./details-employee.component.scss']
})
export class DetailsEmployeeComponent implements OnInit {
    hide = {
        overview: false,
        contact: false,
        finance: false,
        administrative: false
    }
    employeeId: number;
    model: any = {};
    listCompanyEmployee = []

    constructor(
        private route: ActivatedRoute,
        private service: EmployeeService,
        private dateService: FormatDateService,
        public dialog: MatDialog,
    ) { }

    ngOnInit() {
        this.employeeId = +this.route.snapshot.params.id;
        this.service.detailEmployee(this.employeeId).subscribe(res => {
            this.model = res;
        })
        this.service.detailCompanyEmployee(this.employeeId).subscribe(res => {
            this.listCompanyEmployee = res.map(x => {
                return {
                    BaseSalary: x.BaseSalary,
                    CompanyEmployeeId: x.CompanyEmployeeId,
                    DepartmentId: x.DepartmentId,
                    DepartmentName: x.DepartmentName,
                    EmployeeId: x.EmployeeId,
                    InsuranceSalary: x.InsuranceSalary,
                    PositionId: x.PositionId,
                    PositionName: x.PositionName,
                    StartDate: x.StartDate,
                    dateCover: this.dateService.formatDate(x.StartDate, 'DD-MM-YYYY'),
                    hide: false
                }
            });
        })
    }

    onDeleteCompany = (item) => {
        Swal.fire({
            title: 'Thông báo',
            text: "Bạn chắc chắn muốn xóa công việc này?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Đồng ý',
            cancelButtonText: 'Hủy bỏ',
        }).then((result) => {
            if (result.isConfirmed) {
                this.service.deleteCompanyEmployee(item.CompanyEmployeeId).subscribe(res => {
                    this.listCompanyEmployee = this.listCompanyEmployee.filter(x => x.CompanyEmployeeId !== item.CompanyEmployeeId);
                })
            }
        })

    }

    openDialog() {
        this.dialog
            .open(CreateSalaryEmployeeComponent, {
                panelClass: 'dialog-create-employee',
            })
            .afterClosed()
            .subscribe((result) => {
            });
    }
}
