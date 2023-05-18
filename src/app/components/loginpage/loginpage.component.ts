import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css'],
})
export class LoginpageComponent implements OnInit {
  message!: String;

  ngOnInit(): void {
    this.message = 'Hello all';
  }
  LoggedIn() {
    console.log('AfterClick');
  }

  LoggedOut(event: Event) {
    console.log(event);
  }
}
