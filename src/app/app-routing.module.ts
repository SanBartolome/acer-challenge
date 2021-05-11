import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'registro',
    loadChildren: () =>
      import('./pages/register/register.module').then((m) => m.RegisterModule),
  },
  {
    path: 'envivo',
    loadChildren: () =>
      import('./pages/live/live.module').then((m) => m.LiveModule),
  },
  {
    path: 'legal',
    loadChildren: () =>
      import('./pages/legal/legal.module').then((m) => m.LegalModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
