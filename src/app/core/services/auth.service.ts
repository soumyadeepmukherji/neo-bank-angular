
import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly platformId = inject(PLATFORM_ID);

  isAuthenticated(): boolean {
    // sessionStorage is available only in the browser
    if (!isPlatformBrowser(this.platformId)) {
      return false;
    }

    return !!sessionStorage.getItem('token');
  }
}

