import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardAtencionRoutingModule } from './dashboard-atencion-routing.module';
import { DashboardAtencionComponent } from './dashboard-atencion.component';
import { DaprofileeditComponent } from './daprofile/daprofileedit/daprofileedit.component';
import { DaprofileviewComponent } from './daprofile/daprofileview/daprofileview.component';
import { DadashboardnavbarComponent } from './dacomponents/dadashboardnavbar/dadashboardnavbar.component';
import { DadashboardsidebarComponent } from './dacomponents/dadashboardsidebar/dadashboardsidebar.component';
import { DadashboardfooterComponent } from './dacomponents/dadashboardfooter/dadashboardfooter.component';
import { DahomeComponent } from './dahome/dahome.component';
import { Dasub1proc1Component } from './daprocesos/daproceso1/dasub1proc1/dasub1proc1.component';
import { Dasub2proc1Component } from './daprocesos/daproceso1/dasub2proc1/dasub2proc1.component';
import { Dasub3proc1Component } from './daprocesos/daproceso1/dasub3proc1/dasub3proc1.component';
import { Dasub4proc1Component } from './daprocesos/daproceso1/dasub4proc1/dasub4proc1.component';
import { Dasub5proc1Component } from './daprocesos/daproceso1/dasub5proc1/dasub5proc1.component';
import { Dasub1proc2Component } from './daprocesos/daproceso2/dasub1proc2/dasub1proc2.component';
import { Dasub2proc2Component } from './daprocesos/daproceso2/dasub2proc2/dasub2proc2.component';
import { Dasub3proc2Component } from './daprocesos/daproceso2/dasub3proc2/dasub3proc2.component';
import { Dasub4proc2Component } from './daprocesos/daproceso2/dasub4proc2/dasub4proc2.component';
import { Dasub1proc3Component } from './daprocesos/daproceso3/dasub1proc3/dasub1proc3.component';
import { Dasub2proc3Component } from './daprocesos/daproceso3/dasub2proc3/dasub2proc3.component';
import { Dasub3proc3Component } from './daprocesos/daproceso3/dasub3proc3/dasub3proc3.component';
import { Dasub4proc3Component } from './daprocesos/daproceso3/dasub4proc3/dasub4proc3.component';


@NgModule({
  declarations: [
    DashboardAtencionComponent,
    DaprofileeditComponent,
    DaprofileviewComponent,
    DadashboardnavbarComponent,
    DadashboardsidebarComponent,
    DadashboardfooterComponent,
    DahomeComponent,
    Dasub1proc1Component,
    Dasub2proc1Component,
    Dasub3proc1Component,
    Dasub4proc1Component,
    Dasub5proc1Component,
    Dasub1proc2Component,
    Dasub2proc2Component,
    Dasub3proc2Component,
    Dasub4proc2Component,
    Dasub1proc3Component,
    Dasub2proc3Component,
    Dasub3proc3Component,
    Dasub4proc3Component
  ],
  imports: [
    CommonModule,
    DashboardAtencionRoutingModule
  ]
})
export class DashboardAtencionModule { }
