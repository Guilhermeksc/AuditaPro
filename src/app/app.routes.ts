import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { PlanejamentoComponent } from './modules/ccimar-10/planejamento/planejamento.component';
import { PaintComponent } from './modules/ccimar-11/paint/paint.component';
import { RaintComponent } from './modules/ccimar-11/raint/raint.component';
import { DiarioOficialComponent } from './modules/ccimar-12/diario-oficial/diario-oficial.component';
import { AltaMaterialidadeComponent } from './modules/ccimar-12/alta-materialidade/alta-materialidade.component';
import { HomologadoEstimadoComponent } from './modules/ccimar-12/homologado-estimado/homologado-estimado.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },

  // 🔹 Home será a base das rotas
  {
    path: 'home',
    component: HomeComponent,
    children: [
      // CCIMAR-10
      {
        path: 'ccimar-10',
        children: [{ path: 'planejamento', component: PlanejamentoComponent }]
      },
      // CCIMAR-11
      {
        path: 'ccimar-11',
        children: [
          { path: 'paint', component: PaintComponent },
          { path: 'raint', component: RaintComponent }
        ]
      },
      // CCIMAR-12
      {
        path: 'ccimar-12',
        children: [
          { path: 'diario-oficial', component: DiarioOficialComponent },
          { path: 'alta-materialidade', component: AltaMaterialidadeComponent },
          { path: 'homologado-estimado', component: HomologadoEstimadoComponent }
        ]
      },
      // Outras seções CCIMAR-13 a CCIMAR-16 podem ser adicionadas aqui...
    ]
  },

  // Redirecionamento padrão
  { path: '**', redirectTo: 'home' }
];
