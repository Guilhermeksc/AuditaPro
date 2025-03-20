import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { HeaderComponent } from '../../components/header/header.component';
import { SidebarToggleService } from '../../services/sidebar/sidebar-toggle.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, SidebarComponent, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  sidebarWidth = '250px';

  constructor(private sidebarService: SidebarToggleService) {
    this.sidebarService.sidebarWidth$.subscribe(width => {
      this.sidebarWidth = width;
    });
  }
}
