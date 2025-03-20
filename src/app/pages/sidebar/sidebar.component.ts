import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav'; // Importação correta
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule, MatIconModule, MatSidenavModule], // Incluindo MatSidenavModule
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  activeMenu: string | null = null;

  sections = [
    { name: 'Início', icon: 'home', path: 'inicio' },
    { name: 'PAINT', icon: 'assignment', path: 'paint' },
    { name: 'RAINT', icon: 'bar_chart', path: 'raint' },
    { name: 'CCIMAR-11', icon: 'apartment', path: 'ccimar-11' },
    { name: 'CCIMAR-12', icon: 'apartment', path: 'ccimar-12' },
    { name: 'CCIMAR-13', icon: 'apartment', path: 'ccimar-13' },
    { name: 'CCIMAR-14', icon: 'apartment', path: 'ccimar-14' },
    { name: 'CCIMAR-15', icon: 'apartment', path: 'ccimar-15' },
    { name: 'CCIMAR-16', icon: 'apartment', path: 'ccimar-16' },
    { name: 'CONFIG', icon: 'settings', path: 'config' }
  ];

  submenuOptions = ['trilha', 'nota de auditoria', 'mensagem', 'ofício', 'tabelas', 'api'];

  constructor(private router: Router) {}

  toggleSubMenu(menu: string) {
    this.activeMenu = this.activeMenu === menu ? null : menu;
  }

  navigate(section: string, option: string) {
    this.router.navigate([`/dashboard/${section}/${option}`]);
  }
}
