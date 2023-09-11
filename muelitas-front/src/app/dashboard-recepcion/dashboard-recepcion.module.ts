import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRecepcionRoutingModule } from './dashboard-recepcion-routing.module';
import { DashboardRecepcionComponent } from './dashboard-recepcion.component';
import { DrprofileviewComponent } from './drprofile/drprofileview/drprofileview.component';
import { DrprofileeditComponent } from './drprofile/drprofileedit/drprofileedit.component';
import { DrdashboardfooterComponent } from './drcomponents/drdashboardfooter/drdashboardfooter.component';
import { DrdashboardnavbarComponent } from './drcomponents/drdashboardnavbar/drdashboardnavbar.component';
import { DrdashboardsidebarComponent } from './drcomponents/drdashboardsidebar/drdashboardsidebar.component';
import { DrhomeComponent } from './drhome/drhome.component';
import { Drsub1proc1Component } from './drprocesos/drproceso1/drsub1proc1/drsub1proc1.component';
import { Drsub2proc1Component } from './drprocesos/drproceso1/drsub2proc1/drsub2proc1.component';
import { Drsub3proc1Component } from './drprocesos/drproceso1/drsub3proc1/drsub3proc1.component';
import { Drsub4proc1Component } from './drprocesos/drproceso1/drsub4proc1/drsub4proc1.component';
import { Drsub1proc2Component } from './drprocesos/drproceso2/drsub1proc2/drsub1proc2.component';
import { Drsub2proc2Component } from './drprocesos/drproceso2/drsub2proc2/drsub2proc2.component';
import { Drsub3proc2Component } from './drprocesos/drproceso2/drsub3proc2/drsub3proc2.component';
import { Drsub4proc2Component } from './drprocesos/drproceso2/drsub4proc2/drsub4proc2.component';
import { Drsub1proc3Component } from './drprocesos/drproceso3/drsub1proc3/drsub1proc3.component';
import { Drsub2proc3Component } from './drprocesos/drproceso3/drsub2proc3/drsub2proc3.component';
import { Drsub3proc3Component } from './drprocesos/drproceso3/drsub3proc3/drsub3proc3.component';
import { Drsub4proc3Component } from './drprocesos/drproceso3/drsub4proc3/drsub4proc3.component';


@NgModule({
  declarations: [
    DashboardRecepcionComponent,
    DrprofileviewComponent,
    DrprofileeditComponent,
    DrdashboardfooterComponent,
    DrdashboardnavbarComponent,
    DrdashboardsidebarComponent,
    DrhomeComponent,
    Drsub1proc1Component,
    Drsub2proc1Component,
    Drsub3proc1Component,
    Drsub4proc1Component,
    Drsub1proc2Component,
    Drsub2proc2Component,
    Drsub3proc2Component,
    Drsub4proc2Component,
    Drsub1proc3Component,
    Drsub2proc3Component,
    Drsub3proc3Component,
    Drsub4proc3Component
  ],
  imports: [
    CommonModule,
    DashboardRecepcionRoutingModule
  ]
})
export class DashboardRecepcionModule { }
