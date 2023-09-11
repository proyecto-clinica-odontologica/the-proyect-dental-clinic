import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { NavbarhomeComponent } from './components/navbarhome/navbarhome.component';
import { NavbarotherComponent } from './components/navbarother/navbarother.component';
import { NavbarfooterComponent } from './components/navbarfooter/navbarfooter.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PreguntasfrecuentesComponent } from './preguntasfrecuentes/preguntasfrecuentes.component';
import { BlogComponent } from './blog/blog.component';
import { DetailblogComponent } from './detailblog/detailblog.component';


@NgModule({
  declarations: [
    PublicComponent,
    NavbarhomeComponent,
    NavbarotherComponent,
    NavbarfooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    PreguntasfrecuentesComponent,
    BlogComponent,
    DetailblogComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
