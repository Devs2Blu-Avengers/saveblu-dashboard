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
  'category', 'description', 'user', 'urgent','ticket'];

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

}
