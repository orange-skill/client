import { Injectable } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { ApiService } from '../api/api.service';
import { empSignUpForm } from '../../models/user.signup';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loginDisplay = false;

  constructor(private authService: MsalService, private api: ApiService) {}

  public async login() {
    const result = await this.authService.loginPopup().toPromise();
    this.authService.instance.setActiveAccount(result.account);
    this.setLoginDisplay();
    return result;
    // .subscribe({
    //   next: (result) => {
    //     console.log(result.account);
    //     this.authService.instance.setActiveAccount(result.account);
    //     this.setLoginDisplay();
    //   },
    //   error: (error) => console.log(error),
    // });
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

  public async signUp(data: empSignUpForm) {
    return await this.api.post('employee/add', data);
  }

  public async getMongoProfile(email: string) {}
}
