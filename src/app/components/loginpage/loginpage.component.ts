import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/service/Authentication/authentication.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css'],
})
export class LoginpageComponent implements OnInit {
  ngOnInit(): void {}
  response: any;
  loginObj: any = {
    username: '',
    password: '',
  };

  constructor(
    private authService: AuthenticationService,
    private route: Router
  ) {}

  onLogin() {
    var statusCode;
    this.response = this.authService
      .onLogin(this.loginObj)
      .subscribe((res: any) => {
        console.log('res', res);
        statusCode = res.code;
        const role = res.role;
        this.response = res;
        if (role == 'employee') {
          this.route.navigateByUrl('userpage');
        }
        if (role == 'admin') {
          this.route.navigateByUrl('adminpage');
        }
        if (role == 'nothing') {
          console.log('Invalid Details');
        } else {
          console.log('nothing here');
        }
      });
  }
}
