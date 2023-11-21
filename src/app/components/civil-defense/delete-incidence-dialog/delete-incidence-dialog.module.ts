import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteIncidenceDialogComponent } from './delete-incidence-dialog.component';
import { DesignImportsModule } from 'src/app/shared/design-imports/design-imports.module';



@NgModule({
  declarations: [
    DeleteIncidenceDialogComponent
  ],
  imports: [
    CommonModule,
    DesignImportsModule
  ]
})
export class DeleteIncidenceDialogModule { }
