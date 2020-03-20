import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./home/home.component";
import { CalendarComponent } from "./calendar/calendar.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      {
        // Enabling scrolling within a page to an anchor
        anchorScrolling: 'enabled'
      }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
