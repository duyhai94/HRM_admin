import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
const routes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            {
                path: 'home',
                loadChildren: () =>
                    import('./home/home.module').then((m) => m.HomeModule),
            },
            {
                path: 'employee',
                loadChildren: () =>
                    import('./employee/employee.module').then((m) => m.EmployeeModule),
            },
            {
                path: 'workdays',
                loadChildren: () =>
                    import('./workdays/workdays.module').then((m) => m.WorkdaysModule),
            },
            {
                path: 'salary',
                loadChildren: () =>
                    import('./salary/salary.module').then((m) => m.SalaryModule),
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PagesRoutingModule { }
