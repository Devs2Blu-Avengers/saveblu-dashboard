import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Aqui colocamos nossas rotas
const routes: Routes = [
  // criar uma rota - Objeto de rota
  // 1 - zerar rotas
  { path: '', pathMatch: 'full', redirectTo: '/'},
   // 2 - criar a rota da Home
  // defino rota e defino componente
  {path: 'civil-defense',
    loadChildren: () =>
    import('./components/civil-defense/civil-defense.module').then((m) => m.CivilDefenseModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
