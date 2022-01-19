import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LegalComponent } from './legal.component';

const routes: Routes = [
  {
    path: 'reglamento-1vs1',
    loadChildren: () =>
      import('../rules/rules.module').then((m) => m.RulesModule),
  },
  {
    path: '**',
    component: LegalComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LegalRoutingModule {}
