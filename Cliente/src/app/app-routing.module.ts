import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { SobremiComponent } from './components/sobremi/sobremi.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component:HomeComponent },
  { path:'cursos', component:CursosComponent },
  { path:'contacto', component:ContactoComponent },
  { path:'sobremi', component:SobremiComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
