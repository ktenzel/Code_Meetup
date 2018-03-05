import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const appRoutes: Routes = [
  {
  path: '',
  component: HomeComponent
  },
  {
  path: 'user-profile',
  component: UserProfileComponent
  }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
