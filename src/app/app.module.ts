import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LogOutComponent } from './log-out/log-out.component';
import { SignupComponent } from './Component/MAIN/signup/signup.component';
import { SigninComponent } from './Component/MAIN/signin/signin.component';
import { UserComponent } from './Component/USER/user/user.component';
import { DashboardComponent } from './Component/ADMIN/dashboard/dashboard.component';
import { MainComponent } from './Component/MAIN/main/main.component';
import { AddProjectComponent } from './Component/ADMIN/add-project/add-project.component';
import { ShowProjectComponent } from './Component/ADMIN/show-project/show-project.component';
import { AddTaskComponent } from './Component/ADMIN/add-task/add-task.component';
import { ShowTaskComponent } from './Component/USER/show-task/show-task.component';
import { Interciptor } from './interciptor/interciptor';
import { AddResourceComponent } from './Component/ADMIN/add-resource/add-resource.component';
// import { AddResourceComponent } from './Component/ADMIN/add-resource/add-resource.component';
import { ShowResourceComponent } from './Component/USER/show-resource/show-resource.component';

@NgModule({
  declarations: [
    AppComponent,
    AddProjectComponent,
    ShowProjectComponent,
    AddTaskComponent,
    ShowTaskComponent,
    AddResourceComponent,
    ShowResourceComponent,
    LogOutComponent,
    DashboardComponent,
    UserComponent,
    SigninComponent,
    SignupComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [
  {
    provide: HTTP_INTERCEPTORS,
      useClass: Interciptor,
      multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }