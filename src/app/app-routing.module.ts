import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Lanterns } from './lanterns/lanterns';
import { LanternDetail } from './lanterns/lantern-detail/lantern-detail';
import { LanternEdit } from './lanterns/lantern-edit/lantern-edit';
import { Buoys } from './buoys/buoys';
import { BuoyDetail } from './buoys/buoy-detail/buoy-detail';
import { BuoyEdit } from './buoys/buoy-edit/buoy-edit';
import { Projects } from './projects/projects';
import { ProjectDetail } from './projects/project-detail/project-detail';
import { ProjectEdit } from './projects/project-edit/project-edit';

const routes: Routes = [
  { path: '', redirectTo: '/lanterns', pathMatch: 'full' },
  { path: 'lanterns', component: Lanterns,
    children: [
    { path: 'new', component: LanternEdit },
    { path: ':id', component: LanternDetail },
    { path: ':id/edit', component: LanternEdit },
  ],
  },
  { path: 'buoys', component: Buoys,
    children: [
      { path: 'new', component: BuoyEdit },
      { path: ':id', component: BuoyDetail },
      { path: ':id/edit', component: BuoyEdit }
    ]
  },
  {
    path: 'projects', component: Projects,
    children: [
      { path: 'new', component: ProjectEdit },
      { path: ':id', component: ProjectDetail },
      { path: ':id/edit', component: ProjectEdit }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}