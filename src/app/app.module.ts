import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { TaskListPageComponent } from './pages/task-list-page/task-list-page.component';
import { DetailListPageComponent } from './pages/detail-list-page/detail-list-page.component';
import { ContactListPageComponent } from './pages/contact-list-page/contact-list-page.component';
import { ContactDetailPageComponent } from './pages/contact-detail-page/contact-detail-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { FormularioLoginComponent } from './components/formulario-login/formulario-login.component';
import { ListaTareasComponent } from './components/lista-tareas/lista-tareas.component';
import { DetalleTareasComponent } from './components/detalle-tareas/detalle-tareas.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomePageComponent,
    RegisterPageComponent,
    TaskListPageComponent,
    DetailListPageComponent,
    ContactListPageComponent,
    ContactDetailPageComponent,
    NotFoundPageComponent,
    FormularioLoginComponent,
    ListaTareasComponent,
    DetalleTareasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
