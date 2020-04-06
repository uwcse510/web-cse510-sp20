import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssignmentsComponent} from './assignments/assignments.component';
import { CalendarComponent } from './calendar/calendar.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'assignments', redirectTo: 'assignments/', pathMatch: 'full' },
  { path: 'assignments/:assignment', component: AssignmentsComponent },
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
