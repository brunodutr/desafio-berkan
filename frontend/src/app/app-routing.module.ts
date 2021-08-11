import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'conta', pathMatch: 'full' },
  {
    path: 'conta',
    loadChildren: () =>
      import('./modules/conta/conta.module').then((m) => m.ContaModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
