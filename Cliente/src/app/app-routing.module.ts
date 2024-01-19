import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { SobremiComponent } from './components/sobremi/sobremi.component';
import { CursosyjornadasComponent } from './components/cursosyjornadas/cursosyjornadas.component';
import { JornadasComponent } from './components/jornadas/jornadas.component';
import { ProductosComponent } from './components/productos/productos.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component:HomeComponent },
  { path:'cursos-y-jornadas', component:CursosyjornadasComponent },
  { path:'cursos', component:CursosComponent },
  { path:'jornadas', component:JornadasComponent },
  { path:'contacto', component:ContactoComponent },
  { path:'insumos', component:ProductosComponent },
  { path:'sobremi', component:SobremiComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
