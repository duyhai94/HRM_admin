import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SalaryModel } from '../../models';
import { SalaryService } from '../../services/salary.service';
@Component({
    selector: 'app-add-salary',
    templateUrl: './add-salary.component.html',
    styleUrls: ['./add-salary.component.scss'],
})
export class AddSalaryComponent implements OnInit {
    model = new SalaryModel();
    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        public dialogRef: MatDialogRef<AddSalaryComponent>,
        private service: SalaryService
    ) { }

    ngOnInit(): void {
        console.log(this.data);
    }

    closeDialog() {
        this.dialogRef.close();
    }

    createSalary = () => {
        this.service.create(this.model).subscribe((res) => { });
    }

    deleteItem = (item) => {
        this.service.delete(item.MonthlyAdditionItemId).subscribe((res) => { });
    }
}
