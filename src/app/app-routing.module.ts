import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './components/login/login-form-component';
import { OnePageComponent } from './components/page-one/one-component';
import { TwoPageComponent } from './components/page-two/two-component';

const routes: Routes = [
  { path: 'login', component: LoginFormComponent},
  { path: 'onePage', component: OnePageComponent},
  { path: 'twoPage', component: TwoPageComponent},
  { path: '',  component: LoginFormComponent, pathMatch: 'full'},
  {path: '**',  component: LoginFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
