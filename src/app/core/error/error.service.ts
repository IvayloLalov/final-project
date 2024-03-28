import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  private appiError$$ = new BehaviorSubject(null);
  public apiError$ = this.appiError$$.asObservable();
  constructor() {}

  setError(error: any): void {
    this.appiError$$.next(error);
  }
}
