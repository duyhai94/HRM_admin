import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { BaseApiService } from 'src/app/shared/services/base.service';
@Injectable({
  providedIn: 'root',
})
export class WorkdayService extends BaseApiService<any> {
  constructor(public http: HttpClient) {
    super(http, 'api/CompanyShift/username/company');
  }

  getWorkdayOfCompany() {
    return this.http
      .get('api/CompanyShift/username/company')
      .pipe(map((res: any) => res.Payload.reverse()));
  }

  getListWorkday(Year, Month) {
    return this.http
      .get(
        `api/DailyEmployeeShift/username/company/report?Year=${Year}&Month=${Month}`
      )
      .pipe(map((res: any) => res.Payload.reverse()));
  }

  getListLateEarly(Year, Month) {
    return this.http
      .get(
        `api/DailyEmployeeShift/username/company/LateEarly?Year=${Year}&Month=${Month}`
      )
      .pipe(map((res: any) => res.Payload.reverse()));
  }
}
