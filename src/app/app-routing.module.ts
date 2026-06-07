import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Lanterns } from './lanterns/lanterns';
import { Buoys } from './buoys/buoys';

const routes: Routes = [
  { path: '', redirectTo: '/lanterns', pathMatch: 'full' },
  { path: 'lanterns', component: Lanterns },
  { path: 'buoys', component: Buoys },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}