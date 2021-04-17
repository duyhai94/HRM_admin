import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddSalaryComponent } from './component/add-salary/add-salary.component';
import { MinusSalaryComponent } from './component/minus-salary/minus-salary.component';
import { SalaryPageComponent } from './component/salary-page.component';
import { SalaryRoutingModule } from './salary-routing.module';
@NgModule({
    declarations: [
        SalaryPageComponent,
        AddSalaryComponent,
        MinusSalaryComponent
    ],
    imports: [
        CommonModule,
        SalaryRoutingModule,
        SharedModule
    ]
})
export class SalaryModule { }
