import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateIncidenceDialogComponent } from './update-incidence-dialog.component';
import { DesignImportsModule } from 'src/app/shared/design-imports/design-imports.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    UpdateIncidenceDialogComponent
  ],
  imports: [
    CommonModule,
    DesignImportsModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class UpdateIncidenceDialogModule { }
