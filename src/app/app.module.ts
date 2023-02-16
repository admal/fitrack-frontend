import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataTileComponent } from './shared/ui/data-tile/data-tile.component';
import { NavbarComponent } from './shared/ui/navbar/navbar.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { LoginComponent } from './views/login/login.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonComponent } from './shared/ui/button/button.component';
import { NumberPickerComponent } from './shared/ui/number-picker/number-picker.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from './shared/ui/modal/modal.component';
import { CalendarComponent } from './views/calendar/calendar.component';
import { CalendarTileComponent } from './views/calendar/calendar-tile/calendar-tile.component';
import { CalendarHeaderTileComponent } from './views/calendar/calendar-header-tile/calendar-header-tile.component';

@NgModule({
  declarations: [
    AppComponent,
    DataTileComponent,
    NavbarComponent,
    DashboardComponent,
    LoginComponent,
    ButtonComponent,
    NumberPickerComponent,
    ModalComponent,
    CalendarComponent,
    CalendarTileComponent,
    CalendarHeaderTileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  // constructor(library: FaIconLibrary){
  //   library.addIcons(
  //     faSquare,
  //     faCheckSquare,
  //     farSquare,
  //     farCheckSquare,
  //     faStackOverflow,
  //     faGithub,
  //     faMedium
  //   );
  // }
 }
