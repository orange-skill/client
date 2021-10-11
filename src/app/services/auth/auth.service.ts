import { Injectable } from '@angular/core';
import { MsalService } from '@azure/msal-angular';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loginDisplay = false;

  constructor(private authService: MsalService) {}

  public login() {
    this.authService.loginPopup().subscribe({
      next: (result) => {
        console.log(result.account);
        this.authService.instance.setActiveAccount(result.account);
        this.setLoginDisplay();
      },
      error: (error) => console.log(error),
    });
  }

  private setLoginDisplay() {
    this.loginDisplay = this.authService.instance.getAllAccounts().length > 0;
  }

  public logout() {
    this.authService.instance.setActiveAccount(null);
  }

  public isLoggedIn() {
    if (this.authService.instance.getActiveAccount() != null) {
      return true;
    } else {
      return false;
    }
  }
}
