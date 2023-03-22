import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { filter, map, Observable, Subject, tap } from 'rxjs';
import { AuthService, LoginResult } from 'src/app/shared/auth/auth.service';

@Component({
  selector: 'ft-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  loginCredentialsClick$ = new Subject<void>();
  // loginProcess$: Observable<LoginResult>;

  constructor(
    private readonly fb: FormBuilder,
    private readonly auth: AuthService
  ) {
    this.loginForm = fb.group({
      email: fb.control("", [Validators.required, Validators.email]),
      password: fb.control("", [Validators.required]),
      rememberMe: fb.control(false)
    });

    // this.loginProcess$ = this.loginCredentialsClick$.pipe(
    //   filter(_ => this.loginForm.valid),
    //   map(x => {return {}})
    // )
  }

  get email() {
    return this.loginForm.get("email");
  }

  get password() {
    return this.loginForm.get("password");
  }

  login() {
    this.loginForm.markAllAsTouched();
    this.loginCredentialsClick$.next();
  }
}
