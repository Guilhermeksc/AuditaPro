import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { SidebarToggleService } from '../../services/sidebar/sidebar-toggle.service';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, RouterModule],  // 🔹 Adicionando RouterModule
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  isOpen = true;

  menuItems = [
    { title: 'CCIMAR-10', icon: 'assets/icons/svg/menu_icon.svg', children: ['Planejamento'] },
    { title: 'CCIMAR-11', icon: 'assets/icons/svg/menu_icon.svg', children: ['PAINT', 'RAINT'] },
    { title: 'CCIMAR-12', icon: 'assets/icons/svg/menu_icon.svg', children: [
        'Pesquisa Diário Oficial da União (DOU)',
        'Análise Processual de Alta Materialidade',
        'Preço homologado acima do Estimado',
        'Fragilidade da Estimativa da Demanda',
        'Restrição para Contratação'
      ]
    },
    { title: 'CCIMAR-13', icon: 'assets/icons/svg/menu_icon.svg', children: ['Despesa', 'Orçamento'] },
    { title: 'CCIMAR-14', icon: 'assets/icons/svg/menu_icon.svg', children: ['Pessoal'] },
    { title: 'CCIMAR-15', icon: 'assets/icons/svg/menu_icon.svg', children: ['Patrimônio', 'Subsistência'] },
    { title: 'CCIMAR-16', icon: 'assets/icons/svg/menu_icon.svg', children: ['Webscraping', 'API', 'RPA'] },
  ];

  // 🔹 Mapeia nomes específicos para os caminhos corretos
  private routeMap: { [key: string]: string } = {
    'PAINT': 'paint',
    'RAINT': 'raint',
    'Análise Processual de Alta Materialidade': 'alta-materialidade',
    'Preço homologado acima do Estimado': 'homologado-estimado',
    'Pesquisa Diário Oficial da União (DOU)': 'diario-oficial',
    'Fragilidade da Estimativa da Demanda': 'fragilidade-demanda',
    'Restrição para Contratação': 'restricao-contratacao'
  };

  constructor(
    private sidebarService: SidebarToggleService,
    private router: Router  // 🔹 Adicionando Router ao construtor
  ) {
    this.sidebarService.isOpen$.subscribe(state => this.isOpen = state);
  }

  navigate(section: string, option: string) {
    let route = this.routeMap[option] || this.slugify(option);
    route = `home/${this.slugify(section)}/${route}`;
    this.router.navigate([route]);
  }

  private slugify(text: string): string {
    return text.toLowerCase()
      .replace(/\s+/g, '-')   // Substitui espaços por traços
      .replace(/[^\w-]/g, ''); // Remove caracteres especiais
  }
}
