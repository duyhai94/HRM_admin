import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkdaysPageComponent } from './containers/workdays-page/workdays-page.component';

const routes: Routes = [
    {
        path: '',
        component: WorkdaysPageComponent,
    },
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class WorkdaysRoutingModule { }
