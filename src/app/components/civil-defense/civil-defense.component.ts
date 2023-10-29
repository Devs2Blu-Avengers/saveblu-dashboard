import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IncidenceModel } from 'src/app/@core/models/incidence-model.model';
import { IncidenceService } from 'src/app/@core/services/incidence.service';
import { DeleteIncidenceDialogComponent } from './delete-incidence-dialog/delete-incidence-dialog.component';
import { UpdateIncidenceDialogComponent } from './update-incidence-dialog/update-incidence-dialog.component';


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

  constructor(private service: IncidenceService, public dialog: MatDialog) {

  }

  ngOnInit(): void {
    this.listIncidences();
  }

  listIncidences(): void {
    this.service.listIncidences().subscribe((data) => {
      this.incidenceModelList = data;
    });
  }

  // Abri caixa de diálogo
  deleteIncidence(element: IncidenceModel): void {
    // Pega os atributos do elemento e injeta na caixa de diálogo
    this.dialog.open(DeleteIncidenceDialogComponent, {
      width: '400px',
      data: {
        id: element.id,
        date: element.date,
        category: element.category,
        description: element.description,
        user: element.user,
        image: element.image,
        urgent: element.urgent,
        ticket: element.ticket
      },
    });
  }

  // Abri caixa de diálogo
  updateIncidence(element: IncidenceModel): void {
    // Pega os atributos do elemento e injeta na caixa de diálogo
    this.dialog.open(UpdateIncidenceDialogComponent, {
      width: '400px',
      data: {
        id: element.id,
        date: element.date,
        category: element.category,
        description: element.description,
        user: element.user,
        image: element.image,
        urgent: element.urgent,
        ticket: element.ticket
      },
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
    const dateParts = date.split('-'); //  Divide a data em ano, mês e dia
    if (dateParts.length === 3) {
      const [year, month, day] = dateParts;
      return `${day}/${month}/${year}`;
    } else {
      return date; // Se a data não estiver no formato esperado, retorne a data original
    }
  }
}
