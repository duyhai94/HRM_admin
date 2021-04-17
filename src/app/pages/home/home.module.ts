import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomePageComponent } from './component/home-page.component';
import { NotAllowedComponent } from './component/not-allowed/not-allowed.component';
import { AllowedComponent } from './component/allowed/allowed.component';
import { MatTableModule } from '@angular/material/table';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { LeftEarlyComponent } from './component/left-early/left-early.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
@NgModule({
  declarations: [
    HomePageComponent,
    LeftEarlyComponent,
    NotAllowedComponent,
    AllowedComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    MatTableModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
  ],
})
export class HomeModule {}
