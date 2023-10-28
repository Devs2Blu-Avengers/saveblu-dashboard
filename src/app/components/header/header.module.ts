import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { DesignImportsModule } from 'src/app/shared/design-imports/design-imports.module';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  exports:[
    HeaderComponent
  ],
  imports: [
    CommonModule,
    DesignImportsModule
  ]
})
export class HeaderModule { }
