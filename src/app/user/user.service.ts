import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subscription, tap } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { UserForAuth } from 'src/types/user';

@Injectable({
  providedIn: 'root',
})
export class UserService implements OnDestroy {
  private user$$ = new BehaviorSubject<UserForAuth | undefined>(undefined);

  public user$ = this.user$$.asObservable();

  user: UserForAuth | undefined;
  private subscription: Subscription = new Subscription();
  get isLoggedIn(): boolean {
    return !!this.user$$.getValue();
  }

  constructor(private http: HttpClient) {
    this.loadUserFromLocalStorage();
    this.subscription = this.user$.subscribe((user) => {
      this.user = user;
    });
  }

  private loadUserFromLocalStorage(): void {
    const accessToken = localStorage.getItem('accessToken');
    const email = localStorage.getItem('email');
    const username = localStorage.getItem('username');
    const _id = localStorage.getItem('userId');

    if (accessToken && email && username && _id) {
      this.user$$.next({ email, username, _id, accessToken });
    } else {
      this.user$$.next(undefined);
    }
  }

  login(email: string, password: string) {
    return this.http
      .post<{
        email: string;
        username: string;
        _id: string;
        accessToken: string;
      }>(`${environment.userUrl}/login`, { email, password })
      .pipe(
        tap((res) => {
          localStorage.setItem('accessToken', res.accessToken);

          localStorage.setItem('email', res.email);
          localStorage.setItem('username', res.username);
          localStorage.setItem('userId', res._id);
          this.user$$.next({
            email: res.email,
            username: res.username,
            _id: res._id,
            accessToken: res.accessToken,
          });
        })
      );
  }
  register(username: string, email: string, password: string) {
    const { userUrl } = environment;

    return this.http
      .post<{
        email: string;
        username: string;
        _id: string;
        accessToken: string;
      }>(`${userUrl}/register`, { username, email, password })
      .pipe(
        tap((res) => {
          localStorage.setItem('accessToken', res.accessToken);

          localStorage.setItem('email', res.email);
          localStorage.setItem('username', res.username);
          localStorage.setItem('userId', res._id);
          this.user$$.next({
            email: res.email,
            username: res.username,
            _id: res._id,
            accessToken: res.accessToken,
          });
        })
      );
  }

  logout() {
    return this.http
      .post<UserForAuth>(`${environment.userUrl}/logout`, {})
      .pipe(
        tap((res) => {
          localStorage.clear();
          this.user$$.next(undefined);
        })
      );
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
