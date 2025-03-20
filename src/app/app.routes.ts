import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: '', component: DashboardComponent }, // Dashboard carregado como padrão
      { path: 'dashboard/:section/:option', component: DashboardComponent }
    ]
  },
  { path: '**', redirectTo: '' }
];
