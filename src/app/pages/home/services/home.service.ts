import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BaseApiService } from 'src/app/shared/services/base.service';
@Injectable({
    providedIn: 'root',
})
export class HomeService extends BaseApiService<any> {
    constructor(public http: HttpClient) {
        super(http, 'api/Leavecategory');
    }

    listDailyEmployeeleaveAllowed(year, month, type) {
        return this.http
            .get(`api/DailyEmployeeleave/username/company?Year=${year}&Month=${month}&LeavecategoryType=${type}`)
            .pipe(map((res: any) => res.Payload));
    }

    getListDailyEmployeeShift(date) {
        return this.http
            .get(`api/DailyEmployeeShift/username/company?ReportDate=${date}`)
            .pipe(map((res: any) => res.Payload));
    }

    listDailyEmployeeleave(date) {
        return this.http
            .get(`api/DailyEmployeeleave/username/company?ReportDate=${date}`)
            .pipe(map((res: any) => res.Payload));
    }
}
