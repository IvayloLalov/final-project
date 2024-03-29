import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EMAIL_DOMAINS } from 'src/app/constants';
import { emailValidator } from 'src/app/shared/utils/email-validator';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css'],
})
export class AddRestaurantComponent {
  form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    type: ['', [Validators.required, Validators.minLength(4)]],
    location: ['', [Validators.required, Validators.minLength(6)]],
    image: [
      '',
      [Validators.required, Validators.pattern('https?://.*.(png|jpeg)')],
    ],
    description: ['', [Validators.required, Validators.minLength(10)]],
  });

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}
  addRestaurant() {}
}
