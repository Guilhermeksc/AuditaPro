import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],  // Adicionando RouterModule
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  section: string = '';
  option: string = '';

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.section = params['section'] || 'Início';
      this.option = params['option'] || 'Visão Geral';
    });
  }
}
