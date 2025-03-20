import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
  { path: '', component: LoginComponent }, // Página inicial será a tela de login
  { path: '**', redirectTo: '' } // Qualquer rota desconhecida redireciona para login
];
