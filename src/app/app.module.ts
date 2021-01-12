import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
  import { PageNotFoundComponent } from './errors/page-not-found/page-not-found.component';

import { AppComponent } from './app.component';
  import { MenuComponent } from './menu/menu.component';
  import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AuthGuard } from './services/guards/auth.guard';
import { AuthComponent } from './auth/auth.component';
  import { LoginComponent } from './auth/login/login.component';
  import { RegistrationComponent } from './auth/registration/registration.component';


import { MembersComponent } from './members/members.component';
import { ProfileComponent } from './profile/profile.component';

import { MessagesComponent } from './messages/messages.component';
  import { MessageComponent } from './messages/message/message.component';
  import { AddmessageComponent } from './messages/addmessage/addmessage.component';

import { AnnouncementsComponent } from './announcements/announcements.component';
  import { AnnouncementComponent } from './announcements/announcement/announcement.component';
  import { AddEditannouncementsComponent } from './announcements/addeditannouncements/addeditannouncements.component';

import { CalendarComponent } from './calendar/calendar.component';
  import { AddeditcalendarComponent } from './calendar/addeditcalendar/addeditcalendar.component';

//Layout
  import { FlexLayoutModule } from '@angular/flex-layout';

//Materials
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatChipsModule } from '@angular/material/chips';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {MatExpansionModule} from '@angular/material/expansion';
import { CommonModule } from '@angular/common';

import {MatSelectModule} from '@angular/material/select';
import {MatTooltipModule} from '@angular/material/tooltip';
import { EditmemberComponent } from './members/editmember/editmember.component';
import { UnseenRequestComponent } from './calendar/unseen-request/unseen-request.component';
import { LocalDateTimePipe } from './services/pipes/localdatetime.pipe';
import {MatBadgeModule} from '@angular/material/badge';
import { SitesComponent } from './sites/sites.component';
import { AddeditsiteComponent } from './sites/addeditsite/addeditsite.component';






@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    LoginComponent,
    PageNotFoundComponent,
    MessagesComponent,
    MenuComponent,
    RegistrationComponent,
    ProfileComponent,
    MessageComponent,
    AnnouncementsComponent,
    AnnouncementComponent,
    AddEditannouncementsComponent,
    AddmessageComponent,
    CalendarComponent,
    AddeditcalendarComponent,
    MembersComponent,
    EditmemberComponent,
    UnseenRequestComponent,
    LocalDateTimePipe,
    SitesComponent,
    AddeditsiteComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatCardModule,
    MatTabsModule,
    MatButtonModule,
    MatInputModule,
    MatMenuModule,
    MatFormFieldModule,
    HttpClientModule,
    MatSnackBarModule,
    MatDialogModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatExpansionModule,
    MatSelectModule,
    MatTooltipModule,
    MatBadgeModule
  ],
  providers: [
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
