import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesignImportsModule } from 'src/app/shared/design-imports/design-imports.module';
import { CivilDefenseRoutingModule } from './civil-defense-routing.module';
import { CivilDefenseComponent } from './civil-defense.component';
import { HttpClientModule } from '@angular/common/http';
import { DeleteIncidenceDialogModule } from './delete-incidence-dialog/delete-incidence-dialog.module';
import { UpdateIncidenceDialogModule } from './update-incidence-dialog/update-incidence-dialog.module';



@NgModule({
  declarations: [
    CivilDefenseComponent
  ],
  imports: [
    CommonModule,
    DesignImportsModule,
    CivilDefenseRoutingModule,
    HttpClientModule,
    DeleteIncidenceDialogModule,
    UpdateIncidenceDialogModule
  ]
})
export class CivilDefenseModule { }
