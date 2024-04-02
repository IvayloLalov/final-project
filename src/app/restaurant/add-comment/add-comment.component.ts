import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css'],
})
export class AddCommentComponent {
  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private api: ApiService
  ) {}

  addComment(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const { text } = form.value;
    this.activeRoute.params.subscribe((data) => {
      const restaurantId = data['restaurantId'];
      const userId = data['userId'];
      const username = localStorage.getItem('username');
      this.api
        .addCommentService(text, userId, username!, restaurantId)
        .subscribe({
          next: () => {
            this.router.navigate([`/restaurants/${restaurantId}`]);
          },
          error: () => {
            this.router.navigate(['/restaurants']);
          },
        });
    });
  }

  onCancel(e: Event): void {
    e.preventDefault();
    this.router.navigate(['/restaurants']);
  }
}
