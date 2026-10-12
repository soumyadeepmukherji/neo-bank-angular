import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // Temporary static credentials
  private readonly customerId = 'NB904821';
  private readonly password = 'demopassword';

  private readonly authKey = 'isLoggedIn';

  login(customerId: string, password: string): boolean {

    const isValid =
      customerId === this.customerId &&
      password === this.password;

    if (isValid) {
      sessionStorage.setItem(this.authKey, 'true');
    }

    return isValid;
  }

  isAuthenticated(): boolean {
    return sessionStorage.getItem(this.authKey) === 'true';
  }

  logout(): void {
    sessionStorage.removeItem(this.authKey);
  }
}