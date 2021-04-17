import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsEmployeeComponent } from './component/details/details-employee.component';
import { EmployeePageComponent } from './component/employee-page.component';

const routes: Routes = [
    {
        path: '',
        component: EmployeePageComponent,
    },
    {
        path: ':id',
        component: DetailsEmployeeComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class EmployeeRoutingModule { }
