import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { App } from './app';
import { Lanterns } from './lanterns/lanterns';
import { Buoys } from './buoys/buoys';
import { Projects } from './projects/projects';
import { Header } from './header';
import { LanternList } from './lanterns/lantern-list/lantern-list';
import { LanternItem } from './lanterns/lantern-item/lantern-item';
import { LanternDetail } from './lanterns/lantern-detail/lantern-detail';
import { LanternEdit } from './lanterns/lantern-edit/lantern-edit';
import { BuoyList } from './buoys/buoy-list/buoy-list';
import { BuoyItem } from './buoys/buoy-item/buoy-item';
import { BuoyDetail } from './buoys/buoy-detail/buoy-detail';
import { BuoyEdit } from './buoys/buoy-edit/buoy-edit';
import { ProjectList } from './projects/project-list/project-list';
import { ProjectItem } from './projects/project-item/project-item';
import { ProjectDetail } from './projects/project-detail/project-detail';
import { ProjectEdit } from './projects/project-edit/project-edit';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    App,
    Lanterns,
    Buoys,
    Projects,
    Header,
    LanternList,
    LanternItem,
    LanternDetail,
    LanternEdit,
    BuoyList,
    BuoyItem,
    BuoyDetail,
    BuoyEdit,
    ProjectList,
    ProjectItem,
    ProjectDetail,
    ProjectEdit,
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    FormsModule
  ],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
