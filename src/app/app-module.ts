import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Lanterns } from './lanterns/lanterns';
import { Buoys } from './buoys/buoys';
import { Projects } from './projects/projects';
import { Header } from './header';
import { LanternList } from './lanterns/lantern-list/lantern-list';
import { LanternItem } from './lanterns/lantern-item/lantern-item';
import { LanternDetail } from './lanterns/lantern-detail/lantern-detail';
import { LanternEdit } from './lanterns/lantern-edit/lantern-edit';

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
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
