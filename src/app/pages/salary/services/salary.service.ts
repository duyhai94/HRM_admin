import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BaseApiService } from 'src/app/shared/services/base.service';
@Injectable({
    providedIn: 'root',
})
export class SalaryService extends BaseApiService<any> {
    constructor(public http: HttpClient) {
        super(http, 'api/MonthlyAdditionItem');
    }

    listAccountCategory() {
        return this.http
            .get('api/AccountCategory')
            .pipe(map((res: any) => res.Payload));
    }

    getListPayCheck(Month, Year) {
        return this.http
            .get(`api/MonthlySalary/username/company?Month=${Month}&Year=${Year}`)
            .pipe(map((res: any) => res.Payload));
    }

    updatePayCheck(id: number, data: any): Observable<any> {
        return this.http.put<any>(
            `api/MonthlySalary/${id}`,
            data
        );
    }
}
