import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkdaysRoutingModule } from './workdays-routing.module';
import { WorkdaysPageComponent } from './containers/workdays-page/workdays-page.component';
import { CreateWorkdaysComponent } from './containers/create-workdays/create-workdays.component';

@NgModule({
    declarations: [
        WorkdaysPageComponent,
        CreateWorkdaysComponent
    ],
    imports: [
        CommonModule,
        WorkdaysRoutingModule
    ],
})
export class WorkdaysModule { }
