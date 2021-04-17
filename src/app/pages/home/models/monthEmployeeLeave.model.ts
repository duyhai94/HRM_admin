export class MonthEmployeeLeaveModel {
  EmployeeId: number;
  MediaURL: string;
  LastName: string;
  Count: number;
  DailyEmployeeleaveList: [DailyEmployeeleaveListModel];
}
export class DailyEmployeeleaveListModel {
  WorkingDay: Date;
}
