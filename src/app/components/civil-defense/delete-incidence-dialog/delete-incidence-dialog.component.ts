import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IncidenceModel } from 'src/app/@core/models/incidence-model.model';
import { IncidenceService } from 'src/app/@core/services/incidence.service';

@Component({
  selector: 'app-delete-incidence-dialog',
  templateUrl: './delete-incidence-dialog.component.html',
  styleUrls: ['./delete-incidence-dialog.component.scss']
})
export class DeleteIncidenceDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: IncidenceModel,
  public dialogRef: MatDialogRef<DeleteIncidenceDialogComponent>, private service: IncidenceService) { }

  ngOnInit(): void {
  }

  deleteIncidence(id: number): void {


    this.closeDialog();
  }

  // Fecha a caixa de diálogo
  closeDialog() {
    this.dialogRef.close();
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
