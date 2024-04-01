import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { UserService } from 'src/app/user/user.service';
import { Restaurant } from 'src/types/restaurant';
import { Comment } from 'src/types/comment';

@Component({
  selector: 'app-current-restaurant',
  templateUrl: './current-restaurant.component.html',
  styleUrls: ['./current-restaurant.component.css'],
})
export class CurrentRestaurantComponent implements OnInit {
  restaurant = {} as Restaurant;
  isOwner: boolean = false;
  comments: Comment[] = [];
  comments2: Comment[] = [];

  constructor(
    private apiService: ApiService,
    private userService: UserService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {}

  get isLoggedIn(): boolean {
    return this.userService.isLoggedIn;
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((data) => {
      const id = data['restaurantId'];
      this.apiService.getRestaurant(id).subscribe((restaurant) => {
        this.restaurant = restaurant;

        this.apiService.getCommentService().subscribe((comment) => {
          this.comments = comment;

          for (const comment of this.comments) {
            console.log(comment);
            console.log(id);
            console.log(comment.restaurantId === id);
            if (comment.restaurantId === id) {
              this.comments2.push(comment);
            }
          }
        });
        localStorage.setItem('ownerId', restaurant._ownerId);
        this.isOwner = this.userService.user?._id === restaurant._ownerId;
      });
    });
  }

  removeRestaurant() {
    this.activeRoute.params.subscribe((data) => {
      const id = data['restaurantId'];
      this.apiService.deleteRestaurant(id).subscribe({
        next: () => {
          this.router.navigate(['/restaurants']);
        },
        error: () => {
          this.router.navigate(['/restaurants']);
        },
      });
    });
  }
}
