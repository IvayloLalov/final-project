import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css'],
})
export class AddCommentComponent {
  constructor(private router: Router) {}

  addComment(form: NgForm) {}

  onCancel(e: Event): void {
    e.preventDefault();
    this.router.navigate(['/restaurants']);
  }
}
