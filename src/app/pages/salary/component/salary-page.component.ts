import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AccountCategoryModel } from '../models';
import { SalaryService } from '../services/salary.service';
import { AddSalaryComponent } from './add-salary/add-salary.component';
import { MinusSalaryComponent } from './minus-salary/minus-salary.component';
import { MatPaginator } from '@angular/material/paginator';
@Component({
    selector: 'app-salary-page',
    templateUrl: './salary-page.component.html',
    styleUrls: ['./salary-page.component.scss'],
})
export class SalaryPageComponent implements OnInit {
    isTable = true;
    displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
    textChange = 'Manager';
    listAccountCategory: any = [{
        id: 1,
        check: false
    },
    {
        id: 2,
        check: false
    },
    {
        id: 3,
        check: false
    }
];
    constructor(
        public dialog: MatDialog,
        private salaryService: SalaryService
    ) { }

    ngOnInit() {
        this.salaryService.listAccountCategory().subscribe(res => {
            this.listAccountCategory = res.map(x => {
                return {
                    CategoryId: x.CategoryId,
                    Name: x.Name,
                    TaxRequired: x.TaxRequired,
                    Type: x.Type,
                    Status: x.Status,
                    CreatedOn: x.CreatedOn,
                    CreatedBy: x.CreatedBy,
                    UpdatedOn: x.UpdatedOn,
                    UpdatedBy: x.UpdatedBy,
                    checked: false
                }
            });
        })
    }
    onNextList() {
        this.isTable = !this.isTable;
        if (this.isTable == true) {
            this.textChange = 'Manager';
        } else {
            this.textChange = 'Kế toán';
        }
    }

    openDialogAdd() {
        this.dialog
            .open(AddSalaryComponent, {
                panelClass: 'dialog-add-salary',
                data: {}
                // disableClose: true,
            })
            .afterClosed()
            .subscribe((result) => {
                this.ngOnInit();
            });
    }

    openDialogMinus() {
        this.dialog
            .open(MinusSalaryComponent, {
                panelClass: 'dialog-minus-salary',
                data: {}
                // disableClose: true,
            })
            .afterClosed()
            .subscribe((result) => {
                this.ngOnInit();
            });
    }
}
