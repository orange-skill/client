import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private auth: AuthService, private router: Router) {}

  async ngOnInit() {}

  async login() {
    const result = await this.auth.login();
    const name = result.account?.name;
    const email = result.account?.username;
    console.log(result);
    this.router.navigateByUrl('/auth/signup/' + name + '/' + email);
  }

  logout() {
    this.auth.logout();
  }
}
