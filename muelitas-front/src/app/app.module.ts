import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileviewComponent } from './dashboard/profile/profileview/profileview.component';
import { DashboardfooterComponent } from './dashboard/components/dashboardfooter/dashboardfooter.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileviewComponent,
    DashboardfooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
