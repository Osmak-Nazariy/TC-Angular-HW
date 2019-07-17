import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { UsersListComponent } from './users-list/users-list.component';


const routes: Routes = [
  {path: 'welcome', component: WelcomeComponent},
  {path: 'users-list', component: UsersListComponent},
  {path: 'user/:id', component: UserProfileComponent},
  {path: '**', component: WelcomeComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
