import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class LoginComponent {

  private fb = inject(FormBuilder);
  private router = inject(Router);

  loginError = false;

  loginForm = this.fb.nonNullable.group({
    customerId: [
      'NB904821',
      Validators.required
    ],

    password: [
      'demopassword',
      Validators.required
    ]
  });

  login(): void {

    this.loginError = false;

    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    const { customerId, password } =
      this.loginForm.getRawValue();

    // Temporary static credentials
    const validCustomerId = 'NB904821';
    const validPassword = 'demopassword';

    if (
      customerId === validCustomerId &&
      password === validPassword
    ) {

      // Store login state
      sessionStorage.setItem('isLoggedIn', 'true');

      // Redirect to dashboard
      this.router.navigate(['/dashboard']);

    } else {

      this.loginError = true;

    }
  }
}