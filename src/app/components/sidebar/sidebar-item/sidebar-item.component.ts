import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar-item.component.html',
  styleUrls: ['./sidebar-item.component.scss']
})
export class SidebarItemComponent {
  @Input() title!: string;
  @Input() icon!: string;
  @Input() children: string[] = [];

  isExpanded = false;

  toggleExpand() {
    this.isExpanded = !this.isExpanded;
  }
}
