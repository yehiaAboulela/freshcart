import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from './../../shared/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private FormBuilder: FormBuilder,
    private AuthService: AuthService,
    private Router: Router
  ) {}

  isLoading: boolean = false;
  msgError: string = '';
  registerForm: FormGroup = this.FormBuilder.group({
    email: [null, [Validators.required, Validators.email]],
    password: [
      null,
      [Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{6,10}$/)],
    ],
  });

  handleForm(): void {
    if (this.registerForm.status === 'VALID') {
      this.isLoading = true;
      this.AuthService.setLogin(this.registerForm.value).subscribe({
        next: (response) => {
          if (response.message == 'success') {
            localStorage.setItem('eToken', response.token);
            this.Router.navigate(['/home']);
            this.isLoading = false;
          }
        },
        error: (err: HttpErrorResponse) => {
          this.msgError = err.error.message;
          this.isLoading = false;
        },
      });
    } else {
      this.registerForm.markAllAsTouched();
    }
  }
}
