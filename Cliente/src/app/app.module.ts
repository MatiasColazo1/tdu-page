import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BannerComponent } from './components/banner/banner.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { HomeComponent } from './components/home/home.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { SobremiComponent } from './components/sobremi/sobremi.component';
import { ProductosComponent } from './components/productos/productos.component';
import { FooterComponent } from './components/footer/footer.component';
import { CursosyjornadasComponent } from './components/cursosyjornadas/cursosyjornadas.component';
import { JornadasComponent } from './components/jornadas/jornadas.component';
import { LoaderComponent } from './components/loader/loader.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    CursosComponent,
    HomeComponent,
    ContactoComponent,
    SobremiComponent,
    ProductosComponent,
    FooterComponent,
    CursosyjornadasComponent,
    JornadasComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
