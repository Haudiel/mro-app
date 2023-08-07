import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './components/login/login-form-component';
import { OnePageComponent } from './components/page-one/one-component';
import { PageTable } from './components/page-table/page-table';
import { SolicitudComponent } from './components/solicitud/solicitud-component';

const routes: Routes = [
  { path: 'login', component: LoginFormComponent},
  { path: 'onePage', component: OnePageComponent},
  { path: 'table', component: PageTable},
  { path: 'solicitud', component: SolicitudComponent},
  { path: '',  component: LoginFormComponent, pathMatch: 'full'},
  {path: '**',  component: LoginFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
