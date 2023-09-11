import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardPrincipalRoutingModule } from './dashboard-principal-routing.module';
import { DashboardPrincipalComponent } from './dashboard-principal.component';
import { UsusarioCreateComponent } from './usuario/ususario-create/ususario-create.component';
import { UsuarioCreateComponent } from './usuario/usuario-create/usuario-create.component';
import { UsuarioUpdateComponent } from './usuario/usuario-update/usuario-update.component';
import { ListUpdateComponent } from './usuario/list-update/list-update.component';
import { UsuarioListComponent } from './usuario/usuario-list/usuario-list.component';
import { ClienteListComponent } from './cliente/cliente-list/cliente-list.component';
import { ClienteUpdateComponent } from './cliente/cliente-update/cliente-update.component';
import { ClienteCreateComponent } from './cliente/cliente-create/cliente-create.component';
import { DestistaCreateComponent } from './dentista/destista-create/destista-create.component';
import { DestistaUpdateComponent } from './dentista/destista-update/destista-update.component';
import { DestistaListComponent } from './dentista/destista-list/destista-list.component';
import { RecepcionListComponent } from './recepcion/recepcion-list/recepcion-list.component';
import { RecepcionCreateComponent } from './recepcion/recepcion-create/recepcion-create.component';
import { RecepcionUpdateComponent } from './recepcion/recepcion-update/recepcion-update.component';
import { EnfermeraUpdateComponent } from './enfermera/enfermera-update/enfermera-update.component';
import { EnfermeraCreateComponent } from './enfermera/enfermera-create/enfermera-create.component';
import { EnfermeraListComponent } from './enfermera/enfermera-list/enfermera-list.component';
import { ReporteListComponent } from './reporte/reporte-list/reporte-list.component';
import { Reporte1Component } from './report/reporte1/reporte1.component';
import { Reporte2Component } from './report/reporte2/reporte2.component';
import { Reporte3Component } from './report/reporte3/reporte3.component';
import { Reporte4Component } from './report/reporte4/reporte4.component';
import { Reporte5Component } from './report/reporte5/reporte5.component';
import { Reporte6Component } from './report/reporte6/reporte6.component';
import { Pro1subproceso1Component } from './procesos/proceso1/pro1subproceso1/pro1subproceso1.component';
import { Pro1subproceso2Component } from './procesos/proceso1/pro1subproceso2/pro1subproceso2.component';
import { Pro1subproceso3Component } from './procesos/proceso1/pro1subproceso3/pro1subproceso3.component';
import { Pro1subproceso4Component } from './procesos/proceso1/pro1subproceso4/pro1subproceso4.component';
import { Pro1subproceso5Component } from './procesos/proceso1/pro1subproceso5/pro1subproceso5.component';
import { Pro1subproceso6Component } from './procesos/proceso1/pro1subproceso6/pro1subproceso6.component';
import { Pro2subproceso1Component } from './procesos/proceso2/pro2subproceso1/pro2subproceso1.component';
import { Pro2subproceso2Component } from './procesos/proceso2/pro2subproceso2/pro2subproceso2.component';
import { Pro2subproceso3Component } from './procesos/proceso2/pro2subproceso3/pro2subproceso3.component';
import { Pro2subproceso4Component } from './procesos/proceso2/pro2subproceso4/pro2subproceso4.component';
import { Pro2subproceso5Component } from './procesos/proceso2/pro2subproceso5/pro2subproceso5.component';
import { Pro2subproceso6Component } from './procesos/proceso2/pro2subproceso6/pro2subproceso6.component';
import { Pro3subproceso1Component } from './procesos/proceso3/pro3subproceso1/pro3subproceso1.component';
import { Pro3subproceso2Component } from './procesos/proceso3/pro3subproceso2/pro3subproceso2.component';
import { Pro3subproceso3Component } from './procesos/proceso3/pro3subproceso3/pro3subproceso3.component';
import { Pro3subproceso4Component } from './procesos/proceso3/pro3subproceso4/pro3subproceso4.component';
import { Pro3subproceso5Component } from './procesos/proceso3/pro3subproceso5/pro3subproceso5.component';
import { Pro3subproceso6Component } from './procesos/proceso3/pro3subproceso6/pro3subproceso6.component';
import { Pro4subproceso1Component } from './procesos/proceso4/pro4subproceso1/pro4subproceso1.component';
import { Pro4subproceso2Component } from './procesos/proceso4/pro4subproceso2/pro4subproceso2.component';
import { Pro4subproceso3Component } from './procesos/proceso4/pro4subproceso3/pro4subproceso3.component';
import { Pro4subproceso4Component } from './procesos/proceso4/pro4subproceso4/pro4subproceso4.component';
import { Pro4subproceso5Component } from './procesos/proceso4/pro4subproceso5/pro4subproceso5.component';
import { ProfileviewComponent } from './profile/profileview/profileview.component';
import { ProfileeditComponent } from './profile/profileedit/profileedit.component';
import { DashboardfooterComponent } from './components/dashboardfooter/dashboardfooter.component';
import { DashboardheaderComponent } from './components/dashboardheader/dashboardheader.component';
import { DashboardnavbarComponent } from './components/dashboardnavbar/dashboardnavbar.component';
import { DashboardsidebarComponent } from './components/dashboardsidebar/dashboardsidebar.component';
import { DphomeComponent } from './dphome/dphome.component';


@NgModule({
  declarations: [
    DashboardPrincipalComponent,
    UsusarioCreateComponent,
    UsuarioCreateComponent,
    UsuarioUpdateComponent,
    ListUpdateComponent,
    UsuarioListComponent,
    ClienteListComponent,
    ClienteUpdateComponent,
    ClienteCreateComponent,
    DestistaCreateComponent,
    DestistaUpdateComponent,
    DestistaListComponent,
    RecepcionListComponent,
    RecepcionCreateComponent,
    RecepcionUpdateComponent,
    EnfermeraUpdateComponent,
    EnfermeraCreateComponent,
    EnfermeraListComponent,
    ReporteListComponent,
    Reporte1Component,
    Reporte2Component,
    Reporte3Component,
    Reporte4Component,
    Reporte5Component,
    Reporte6Component,
    Pro1subproceso1Component,
    Pro1subproceso2Component,
    Pro1subproceso3Component,
    Pro1subproceso4Component,
    Pro1subproceso5Component,
    Pro1subproceso6Component,
    Pro2subproceso1Component,
    Pro2subproceso2Component,
    Pro2subproceso3Component,
    Pro2subproceso4Component,
    Pro2subproceso5Component,
    Pro2subproceso6Component,
    Pro3subproceso1Component,
    Pro3subproceso2Component,
    Pro3subproceso3Component,
    Pro3subproceso4Component,
    Pro3subproceso5Component,
    Pro3subproceso6Component,
    Pro4subproceso1Component,
    Pro4subproceso2Component,
    Pro4subproceso3Component,
    Pro4subproceso4Component,
    Pro4subproceso5Component,
    ProfileviewComponent,
    ProfileeditComponent,
    DashboardfooterComponent,
    DashboardheaderComponent,
    DashboardnavbarComponent,
    DashboardsidebarComponent,
    DphomeComponent
  ],
  imports: [
    CommonModule,
    DashboardPrincipalRoutingModule
  ]
})
export class DashboardPrincipalModule { }
