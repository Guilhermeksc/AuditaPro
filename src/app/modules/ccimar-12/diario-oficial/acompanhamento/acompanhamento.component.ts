import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { DiarioOficialService, DiarioOficial } from '../../../../services/diario-oficial.service';

interface MonthOption {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-acompanhamento',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule
  ],
  templateUrl: './acompanhamento.component.html',
  styleUrls: ['./acompanhamento.component.scss']
})
export class AcompanhamentoComponent implements OnInit {
  displayedColumns: string[] = ['data_publicacao', 'tipo', 'orgao', 'identifica', 'acoes'];
  dataSource: DiarioOficial[] = [];
  filterForm: FormGroup;
  
  availableYears: number[] = [];
  monthOptions: MonthOption[] = [
    { value: 1, viewValue: 'Janeiro' },
    { value: 2, viewValue: 'Fevereiro' },
    { value: 3, viewValue: 'Março' },
    { value: 4, viewValue: 'Abril' },
    { value: 5, viewValue: 'Maio' },
    { value: 6, viewValue: 'Junho' },
    { value: 7, viewValue: 'Julho' },
    { value: 8, viewValue: 'Agosto' },
    { value: 9, viewValue: 'Setembro' },
    { value: 10, viewValue: 'Outubro' },
    { value: 11, viewValue: 'Novembro' },
    { value: 12, viewValue: 'Dezembro' }
  ];

  tiposDocumento: string[] = [
    'Extrato de Termo Aditivo',
    'Extrato de Credenciamento',
    'Aviso',
    'Resultado de Julgamento',
    'Retificação',
    'Extrato de Contrato',
    'Extrato de Apostilamento',
    'Extrato de Inexigibilidade de Licitação',
    'Aviso de Suspensão',
    'Extrato de Adiamento',
    'Extrato de Ata',
    'Extrato de Registro de Preços',
    'Aviso de Licitação-Pregão',
  ].sort();

  constructor(
    private diarioService: DiarioOficialService,
    private fb: FormBuilder
  ) {
    this.filterForm = this.fb.group({
      ano: [''],
      mes: [''],
      tipo: ['']
    });
  }

  ngOnInit() {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth() + 1;
    
    this.availableYears = Array.from(
      { length: currentYear - 2023 },
      (_, i) => 2024 + i
    );

    this.filterForm.patchValue({
      ano: currentYear,
      mes: currentMonth,
      tipo: ''
    });

    this.loadDiarios();

    this.filterForm.valueChanges.subscribe(() => {
      this.loadDiarios();
    });
  }

  loadDiarios() {
    const { ano, mes, tipo } = this.filterForm.value;
    if (ano && mes) {
      this.diarioService.getDiariosByMesAno(ano, mes).subscribe({
        next: (data) => {
          this.dataSource = tipo 
            ? data.filter(d => d.tipo === tipo)
            : data;
        },
        error: (error) => {
          console.error('Erro ao carregar diários:', error);
        }
      });
    }
  }

  openPdf(url: string) {
    window.open(url, '_blank');
  }
} 