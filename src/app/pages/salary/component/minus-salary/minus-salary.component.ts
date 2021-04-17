import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
    selector: 'app-minus-salary',
    templateUrl: './minus-salary.component.html',
    styleUrls: ['./minus-salary.component.scss'],
})
export class MinusSalaryComponent implements OnInit {
    constructor(
        public dialogRef: MatDialogRef<MinusSalaryComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
    ) { }

    ngOnInit(): void {
        console.log(this.data);
    }
    closeDialog() {
        this.dialogRef.close();
    }
}
