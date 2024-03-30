import { AuthService } from './../../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(
    private FormBuilder: FormBuilder,
    private AuthService: AuthService,
    private Router: Router
  ) {}

  isLoading: boolean = false;
  msgError: string = '';

  registerForm: FormGroup = this.FormBuilder.group(
    {
      name: [
        null,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ],
      ],
      email: [null, [Validators.required, Validators.email]],
      password: [
        null,
        [Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{6,10}$/)],
      ],
      rePassword: [
        null,
        [Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{6,10}$/)],
      ],
      phone: [
        null,
        [Validators.required, Validators.pattern(/^01[0123][0-9]{8}$/)],
      ],
    },
    { validators: [this.confirmPassword] }
  );

  confirmPassword(group: FormGroup): void {
    const password = group.get('password');
    const rePassword = group.get('rePassword');
    if (password?.value != rePassword?.value) {
      rePassword?.setErrors({ missmatch: 'password dosnt match' });
    }
    if (password?.value === '') {
      rePassword?.setErrors({ empty: 'feild cant be empty' });
    }
  }

  handleForm(): void {
    if (this.registerForm.status === 'VALID') {
      this.isLoading = true;
      this.AuthService.setRegister(this.registerForm.value).subscribe({
        next: (response) => {
          if (response.message == 'success') {
            this.Router.navigate(['/login']);
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
