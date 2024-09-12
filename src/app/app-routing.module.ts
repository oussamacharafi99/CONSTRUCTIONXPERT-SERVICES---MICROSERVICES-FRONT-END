import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProjectComponent } from './Component/ADMIN/add-project/add-project.component';
import { ShowProjectComponent } from './Component/ADMIN/show-project/show-project.component';
import { LogOutComponent } from './log-out/log-out.component';
import { AddTaskComponent } from './Component/ADMIN/add-task/add-task.component';
import { ShowTaskComponent } from './Component/USER/show-task/show-task.component';
import { AddResourceComponent } from './Component/ADMIN/add-resource/add-resource.component';
import { ShowResourceComponent } from './Component/USER/show-resource/show-resource.component';
import { DashboardComponent } from './Component/ADMIN/dashboard/dashboard.component';
import { UserComponent } from './Component/USER/user/user.component';
import { MainComponent } from './Component/MAIN/main/main.component';
import { SignupComponent } from './Component/MAIN/signup/signup.component';
import { SigninComponent } from './Component/MAIN/signin/signin.component';

const routes: Routes = [
  { path: 'add-project', component: AddProjectComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'show-project', component: ShowProjectComponent },
  { path: 'user', component: UserComponent },
  { path: 'add-task', component: AddTaskComponent },
  { path: 'main', component: MainComponent },
  { path: 'show-task', component: ShowTaskComponent },
  { path: 'logout', component: LogOutComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'logout', component: LogOutComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'project_id/:id', component: ShowTaskComponent },
  { path: 'task_id/:id', component: ShowResourceComponent },
  { path: 'add-resource', component: AddResourceComponent },
  { path: 'show-resource', component: ShowResourceComponent },
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: '**', redirectTo: '/main' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
