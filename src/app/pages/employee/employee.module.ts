import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';

import { CreateEmployeeComponent } from './component/create/create-employee.component';
import { DetailsEmployeeComponent } from './component/details/details-employee.component';
import { EmployeePageComponent } from './component/employee-page.component';
import { EmployeeRoutingModule } from './employee-routing.module';
import { CreateSalaryEmployeeComponent } from './component/details/create-salary-employee/create-salary-employee.component';
import { MatSelectModule } from '@angular/material/select';
@NgModule({
    declarations: [
        EmployeePageComponent,
        CreateEmployeeComponent,
        DetailsEmployeeComponent,
        CreateSalaryEmployeeComponent,
    ],
    imports: [
        CommonModule,
        EmployeeRoutingModule,
        MatTabsModule,
        MatSelectModule
        ],
})
export class EmployeeModule { }
