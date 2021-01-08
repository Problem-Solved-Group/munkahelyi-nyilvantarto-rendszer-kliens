import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { PageNotFoundComponent } from './errors/page-not-found/page-not-found.component';
import { MessagesComponent } from './messages/messages.component';

const routes: Routes = [
  {path: '', component: AuthComponent},
  {path: 'messages', component: MessagesComponent},
  {path: '404', component: PageNotFoundComponent},
  {path: '**', redirectTo:'404', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
