export class LateEarlyModel {
  EmployeeId: number;
  MediaURL: string;
  LastName: string;
  Count: number;
  DailyEmployeeShiftList: [DailyEmployeeShiftListModel];
}

export class DailyEmployeeShiftListModel {
  Duration: number;
  StartStatus: number;
  EndStatus: number;
  WorkingDay: Date;
}
