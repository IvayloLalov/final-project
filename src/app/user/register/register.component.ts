import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EMAIL_DOMAINS } from 'src/app/constants';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  domains = EMAIL_DOMAINS;
  matchPasswords: boolean = true;

  constructor(private userService: UserService, private router: Router) {}

  register(form: NgForm) {
    const { username, email, password, rePassword } = form.value;

    if (form.invalid) {
      return;
    }
    if (password !== rePassword) {
      this.matchPasswords = false;
      return;
    }
    this.matchPasswords = true;

    this.userService
      .register(username!, email!, password!, rePassword!)
      .subscribe(() => {
        this.router.navigate(['/add-restaurant']);
      });
  }
}
