import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateWorkdaysComponent } from '../create-workdays/create-workdays.component';
import { WorkdayService } from '../../services/workday.service';
import {
  DailyEmployeeShiftListModel,
  LateEarlyModel,
  ListWorkdayModedl,
  WorkdaysModel,
} from '../../models/index';
@Component({
  selector: 'app-workdays-page',
  templateUrl: './workdays-page.component.html',
  styleUrls: ['./workdays-page.component.scss'],
})
export class WorkdaysPageComponent implements OnInit {
  constructor(public dialog: MatDialog, public service: WorkdayService) {}
  public shouldShow = true;
  check: boolean;
  list = [
    {
      Id: 1,
      check: false
    },
    {
      Id: 2,
      check: false
    },
    {
      Id: 3,
      check: false
    },
  ]
  ngOnInit(): void {}
  openDialog() {
    this.dialog
      .open(CreateWorkdaysComponent, {
        height: '772px',
        width: '800px',
        panelClass: 'dialog-create-workdays',
        // disableClose: true,
      })
      .afterClosed()
      .subscribe((result) => {});
  }

  getWorkdayOfCompany() {
    this.service.getWorkdayOfCompany().subscribe((res) => {});
  }
  create() {
    let model = new WorkdaysModel();
    this.service.create(model).subscribe((res) => {});
  }
}
