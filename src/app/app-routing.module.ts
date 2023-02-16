import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './views/calendar/calendar.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { LoginComponent } from './views/login/login.component';

const routes: Routes = [
  {
    path: "dashboard", component: DashboardComponent
  },
  {
    path: "login", component: LoginComponent
  },
  {
    path: "calendar", component: CalendarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
