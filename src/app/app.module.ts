import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './material-module';

import { LoginFormComponent } from './components/login/login-form-component';
import { OnePageComponent } from './components/page-one/one-component';
import { PageTable } from './components/page-table/page-table';
import { SolicitudComponent } from './components/solicitud/solicitud-component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    OnePageComponent,
    PageTable,
    SolicitudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
