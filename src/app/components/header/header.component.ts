import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarToggleService } from '../../services/sidebar/sidebar-toggle.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  appTitle = 'AuditaPro';
  version = 'V.0.0.1';
  userName: string = 'Usuário';

  constructor(private userService: UserService, private sidebarService: SidebarToggleService) {
    this.userName = this.userService.getUserName();
  }

  toggleSidebar() {
    this.sidebarService.toggleSidebar();
  }

  changeProfile() {
    console.log('Trocar perfil');
  }

  changePassword() {
    console.log('Alterar senha');
  }

  logout() {
    console.log('Sair do sistema');
  }
}
