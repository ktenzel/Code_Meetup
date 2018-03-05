import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
<<<<<<< HEAD
import { UserProfileComponent } from './user-profile/user-profile.component';

const appRoutes: Routes = [
  {
  path: '',
  component: HomeComponent
  },
  {
  path: 'user-profile',
  component: UserProfileComponent
=======
import { UserListComponent } from './user-list/user-list.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  }, {
    path: 'user-list',
    component: UserListComponent
>>>>>>> e501e7a168a8fa327eaf084c319388ca27927cdb
  }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
