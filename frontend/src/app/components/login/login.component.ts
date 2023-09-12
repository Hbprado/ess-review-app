import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private router: Router){}
  redirectToSignup(event: Event){
    event.preventDefault();
    this.router.navigate(['auth/signup']);
  }
}
