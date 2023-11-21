import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IncidenceModel } from 'src/app/@core/models/incidence-model.model';
import { IncidenceService } from 'src/app/@core/services/incidence.service';

@Component({
  selector: 'app-update-incidence-dialog',
  templateUrl: './update-incidence-dialog.component.html',
  styleUrls: ['./update-incidence-dialog.component.scss']
})
export class UpdateIncidenceDialogComponent implements OnInit {
  public formIncidence: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) public data: IncidenceModel, public dialogRef: MatDialogRef<UpdateIncidenceDialogComponent>,
  private service: IncidenceService, private formBuilder: FormBuilder) {
    // 1- chamar o atributo do formulário
    // 2- construir os atributos do formulário
    this.formIncidence = this.formBuilder.group({
      // inputs(atributos) do nosso formulário
      id: 0,
      date: '',
      category: '',
      description: '',
      user: '',
      urgent: '',
      ticket: ''
    });
  }

  ngOnInit(): void {
  }

  updateIncidence(): void {
    let incidence: IncidenceModel = this.data;
    incidence.urgent = this.formIncidence.value.urgent;


    this.service.updateIndence(incidence);
    this.closeDialog();
  }

  // Fecha a caixa de diálogo
  closeDialog() {
    this.dialogRef.close();
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
