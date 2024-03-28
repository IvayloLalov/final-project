import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EMAIL_DOMAINS } from 'src/app/constants';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  domains = EMAIL_DOMAINS;
  matchPasswords: boolean = true;

  register(form: NgForm) {
    const { password, rePassword } = form.value;
    if (password !== rePassword) {
      this.matchPasswords = false;
      return;
    }
    this.matchPasswords = true;
    console.log(password, rePassword);
  }
}
