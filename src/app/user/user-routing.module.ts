import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LoggedUserGuard } from '../guards/logged-user.guard';

const routes: Routes = [
  {
    path: 'auth/login',
    component: LoginComponent,
    canActivate: [LoggedUserGuard],
  },
  {
    path: 'auth/register',
    component: RegisterComponent,
    canActivate: [LoggedUserGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
