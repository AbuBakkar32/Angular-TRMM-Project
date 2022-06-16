import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent} from "./login/login.component";
import { RegisterComponent} from "./register/register.component";
import { DashboardComponent } from './dashboard/dashboard.component';
import { ControlComponent } from "./control/control.component";
import { SettingComponent } from "./setting/setting.component";

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'control', component: ControlComponent },
  { path: 'setting', component: SettingComponent },
  { path: '**', component: LoginComponent } // If no matching route found, go back to login route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
