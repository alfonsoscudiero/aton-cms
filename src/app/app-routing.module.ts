import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Lanterns } from './lanterns/lanterns';
import { Buoys } from './buoys/buoys';
import { BuoyDetail } from './buoys/buoy-detail/buoy-detail';
import { BuoyEdit } from './buoys/buoy-edit/buoy-edit';

const routes: Routes = [
  { path: '', redirectTo: '/lanterns', pathMatch: 'full' },
  { path: 'lanterns', component: Lanterns },
  { path: 'buoys', component: Buoys,
    children: [
      { path: 'new', component: BuoyEdit },
      { path: ':id', component: BuoyDetail },
      { path: ':id/edit', component: BuoyEdit }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}