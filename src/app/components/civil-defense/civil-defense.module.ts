import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesignImportsModule } from 'src/app/shared/design-imports/design-imports.module';
import { CivilDefenseRoutingModule } from './civil-defense-routing.module';
import { CivilDefenseComponent } from './civil-defense.component';



@NgModule({
  declarations: [
    CivilDefenseComponent
  ],
  imports: [
    CommonModule,
    DesignImportsModule,
    CivilDefenseRoutingModule
  ]
})
export class CivilDefenseModule { }
