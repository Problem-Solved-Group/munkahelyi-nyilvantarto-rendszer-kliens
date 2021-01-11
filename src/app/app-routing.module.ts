import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { AuthComponent } from './auth/auth.component';
import { CalendarComponent } from './calendar/calendar.component';
import { UnseenRequestComponent } from './calendar/unseen-request/unseen-request.component';
import { PageNotFoundComponent } from './errors/page-not-found/page-not-found.component';
import { MembersComponent } from './members/members.component';
import { MessagesComponent } from './messages/messages.component';
import { ProfileComponent } from './profile/profile.component';

import { AuthGuard } from 'src/app/services/guards/auth.guard';

const routes: Routes = [
  {path: '', component: AuthComponent},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  {path: 'messages/sent', component: MessagesComponent, canActivate: [AuthGuard]},
  {path: 'messages/received', component: MessagesComponent, canActivate: [AuthGuard]},
  {path: '', component: AuthComponent, canActivate: [AuthGuard]},
  {path: 'announcements', component: AnnouncementsComponent, canActivate: [AuthGuard]},
  {path: 'unseen', component: UnseenRequestComponent, canActivate: [AuthGuard]},
  {path: 'members', component:MembersComponent, canActivate: [AuthGuard]},
  {path: 'messages', component: MessagesComponent, canActivate: [AuthGuard]},
  {path: 'calendar', component: CalendarComponent, canActivate: [AuthGuard]},
  {path: '404', component: PageNotFoundComponent, canActivate: [AuthGuard]},
  {path: '**', redirectTo:'404', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
