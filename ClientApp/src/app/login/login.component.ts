import { Component, ViewChild } from '@angular/core';
import { employee } from '../login/models/employee';
import { FormGroup, FormBuilder, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
 
})
export class LoginComponent {
  public loginForm: FormGroup = this.formBuilder.group({});
  public forgetUserIdForm: FormGroup = this.formBuilder.group({});
  public isForgetUserId: boolean = false;
  public isBackToLogin: boolean = true;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.createLoginForm();
  }

  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      email: ['']
    });
  }

  createForgetUserIdForm() {
    this.forgetUserIdForm = this.formBuilder.group({
      type: [''],
      email: ['', Validators.required]
    });
  }

  public onLogin(): void {
    this.router.navigate(['/home']);
  }

  public onReset(): void {
    this.loginForm.reset();
  }

  public onForgetUserId(): void {
    this.isForgetUserId = true,
    this.isBackToLogin = false;
    this.createForgetUserIdForm();
  }

  public onResetUserId(): void {
    this.forgetUserIdForm.reset();
  }

  public onForgetUser(): void {
    this.isForgetUserId = false,
    this.isBackToLogin = true;
  }

  public onBackToLogin(): void {
    this.isForgetUserId = false,
    this.isBackToLogin = true;
  }

  

  
}
