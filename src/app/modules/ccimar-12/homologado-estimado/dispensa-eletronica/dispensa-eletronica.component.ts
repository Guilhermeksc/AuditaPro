import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-dispensa-eletronica',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule
  ],
  templateUrl: './dispensa-eletronica.component.html',
  styleUrl: './dispensa-eletronica.component.scss'
})
export class DispensaEletronicaComponent {

}
