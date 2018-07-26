import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router) { }
  onLogin(loginForm: NgForm) {
    this.router.navigateByUrl('/home');
    console.log("LoginData", loginForm.value);
  }
}
