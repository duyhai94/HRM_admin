import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { LoaderService } from '../../../../shared/services/loader.service';
import { NotificationService } from '../../../../shared/services/toastr.service';
import { LoginService } from '../../services/login.service';
@Component({
  selector: 'app-login-form',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginFormComponent {
  model: any = {};
  @HostListener('window:keydown.enter', ['$event'])
  @HostListener('window:keydown.enter', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    this.login();
  }

  constructor(
    private loginService: LoginService,
    private notificationService: NotificationService,
    private router: Router,
    private loaderService: LoaderService
  ) {}

  login = () => {
    localStorage.clear();
    this.loaderService.startLoading();
    this.loginService.login(this.model).subscribe(
      (res) => {
        localStorage.setItem('access_token', JSON.stringify(res));
        localStorage.setItem('token', res.access_token);
        this.router.navigateByUrl('/home');
      },
      (err) => {
        this.notificationService.showError('Đăng nhập thất bại!', err.message);
      },
      () => {
        this.loaderService.stopLoading();
      }
    );
  };
}
