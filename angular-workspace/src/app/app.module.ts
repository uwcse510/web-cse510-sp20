import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GeneratedLinkComponent } from './generated-link/generated-link.component';
import { NavbarComponent } from './navbar/navbar.component';

import { CalendarComponent } from './calendar/calendar.component';
import { HomeComponent } from './home/home.component';
import { AssignmentDueTextComponent } from './assignment-due-text/assignment-due-text.component';
import { AssignmentSubmissionLinkComponent } from './assignment-submission-link/assignment-submission-link.component';

@NgModule({
  declarations: [
    AppComponent,

    GeneratedLinkComponent,
    NavbarComponent,

    CalendarComponent,
    HomeComponent,

    AssignmentDueTextComponent,
    AssignmentSubmissionLinkComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'angular-workspace'}),
    NgbModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
