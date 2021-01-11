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

const routes: Routes = [
  {path: '', component: AuthComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'messages/sent', component: MessagesComponent},
  {path: 'messages/received', component: MessagesComponent},
  {path: '', component: AuthComponent},
  {path: 'announcements', component: AnnouncementsComponent},
  {path: 'unseen', component: UnseenRequestComponent},
  {path: 'members', component:MembersComponent},
  {path: 'messages', component: MessagesComponent},
  {path: 'calendar', component: CalendarComponent},
  {path: '404', component: PageNotFoundComponent},
  {path: '**', redirectTo:'404', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
