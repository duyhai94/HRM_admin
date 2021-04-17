import { Component, OnInit } from '@angular/core';
import { FormatDateService } from 'src/app/shared/services/format-date.service';
import { HomeService } from '../services/home.service';
@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
    constructor(
        private service: HomeService,
        private dateService: FormatDateService
    ) { }

    ListDailyEmployeeleave: any = [];

    ngOnInit() {
        const date = this.dateService.formatDate(new Date(), 'YYYY-MM-DD');
        this.getDailyEmployeeLeave(date);
    }

    getDailyEmployeeLeave = (date) => {
        this.service.listDailyEmployeeleave(date).subscribe((res) => {
            this.ListDailyEmployeeleave = res;
        });
    };
}
