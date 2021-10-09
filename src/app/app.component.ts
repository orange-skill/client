import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'client';
  constructor(private auth: AuthService) {}

  ngOnInit() {
    if (this.auth.isLoggedIn()) {
      console.log('logged in');
    } else {
      console.log('logged out');
    }
  }
}
