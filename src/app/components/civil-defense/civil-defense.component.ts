import { Component, OnInit } from '@angular/core';
import { IncidenceModel } from 'src/app/@core/models/incidence-model.model';
import { IncidenceService } from 'src/app/@core/services/incidence.service';


@Component({
  selector: 'app-civil-defense',
  templateUrl: './civil-defense.component.html',
  styleUrls: ['./civil-defense.component.scss']
})
export class CivilDefenseComponent implements OnInit {
  displayedColumns: string[] = ['id', 'date',
  'category', 'description', 'user', 'urgent','ticket', 'action'];

  // Lista de funcionários cadastrados do servidor em produção
  public incidenceModelList: IncidenceModel[] = [];

  constructor(private service: IncidenceService) {

  }

  ngOnInit(): void {
    this.listIncidences();
  }

  listIncidences(): void {
    this.service.listIncidences().subscribe((data) => {
      this.incidenceModelList = data;
    });
  }

  isUrgent(urgency: boolean): string {
    if (urgency === true) {
      return 'Urgente'
    } else {
      return 'Não Urgente'
    }
  }

  formatDate(date: string): string {
    const dateParts = date.split('-'); // Divide a data em ano, mês e dia
    if (dateParts.length === 3) {
      const [year, month, day] = dateParts;
      return `${day}/${month}/${year}`;
    } else {
      return date; // Se a data não estiver no formato esperado, retorne a data original
    }
  }
}
