import { Component, ViewChild } from '@angular/core';
import { employee } from '../login/models/employee';
import { FormGroup, FormBuilder, NgForm } from '@angular/forms';

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

  constructor(private formBuilder: FormBuilder) {
    this.createLoginForm();
  }

  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      username: [''],
      password: [''],
      email: ['']
    });
  }

  public onLogin(): void {


  }

  public onReset(): void {
    this.loginForm.reset();
  }

  public onForgetUserId(): void {
    this.isForgetUserId = true
  }

  public onResetUserId(): void {

  }

  

  
}
