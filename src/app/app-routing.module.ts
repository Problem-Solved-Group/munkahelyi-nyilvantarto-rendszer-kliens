import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { AuthComponent } from './auth/auth.component';
import { PageNotFoundComponent } from './errors/page-not-found/page-not-found.component';
import { MessagesComponent } from './messages/messages.component';
import { ProfileComponent } from './profile/profile.component';
import { WorkingtimesComponent } from './workingtimes/workingtimes.component';

const routes: Routes = [
  {path: '', component: AuthComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'announcements', component: AnnouncementsComponent},
  {path: 'messages', component: MessagesComponent},
  {path: 'workingtime', component: WorkingtimesComponent},
  {path: '404', component: PageNotFoundComponent},
  {path: '**', redirectTo:'404', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
