import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { BaseApiService } from 'src/app/shared/services/base.service';
@Injectable({
    providedIn: 'root',
})
export class EmployeeService extends BaseApiService<any> {
    constructor(public http: HttpClient) {
        super(http, 'api/CompanyEmployee');
    }

    listEmployee(PageNumber, PageSize) {
        return this.http
            .get(`salarywages/employee/username/company?companyId=1&pageNumber=${PageNumber}&pageSize=${PageSize}`)
            .pipe(map((res: any) => res.payload));
    }

    detailEmployee(id: number) {
        return this.http
            .get(`api/Employee=${id}`)
            .pipe(map((res: any) => res.payload));
    }

    detailCompanyEmployee(id: number) {
        return this.http
            .get(`salarywages/companyemployee/employee?employeeId=${id}`)
            .pipe(map((res: any) => res.payload));
    }

    deleteCompanyEmployee(id: number) {
        return this.http
            .delete(`salarywages/companyemployee?companyEmployeeId=${id}`)
            .pipe(map((res: any) => res.payload));
    }
}
