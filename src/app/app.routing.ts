import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { NewMeetupComponent } from './new-meetup/new-meetup.component';
import { SignInOutComponent } from './sign-in-out/sign-in-out.component';
const appRoutes: Routes = [
  {
  path: '',
  component: HomeComponent
  },
  {
  path: 'user-profile',
  component: UserProfileComponent
  },
  {
    path: 'user-list',
    component: UserListComponent
  },
  {
    path: 'new-meetup',
    component: NewMeetupComponent
  },
  {
    path: 'sign-in-out',
    component: SignInOutComponent
  }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
