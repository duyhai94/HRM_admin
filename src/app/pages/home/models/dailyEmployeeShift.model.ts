export class DailyEmployeeShiftModel {
  LateEarlyCount: number;
  LateEarlyEmployeeList: [EmployeeList];
  PaidLeaveCount: number;
  PaidLeaveEmployeeList: [EmployeeList];
  UnpaidLeaveCount: number;
  UnpaidLeaveEmployeeList: [EmployeeList];
}
export class EmployeeList {
  MediaURL: string;
  LastName: string;
  EmployeeId: number;
}
