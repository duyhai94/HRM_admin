import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-create-workdays',
  templateUrl: './create-workdays.component.html',
  styleUrls: ['./create-workdays.component.scss'],
})
export class CreateWorkdaysComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<CreateWorkdaysComponent>) {}

  ngOnInit(): void {}
  closeDialog() {
    this.dialogRef.close();
  }
}
