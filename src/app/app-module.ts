import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Lanterns } from './lanterns/lanterns';
import { Buoys } from './buoys/buoys';
import { Projects } from './projects/projects';
import { Header } from './header';

@NgModule({
  declarations: [App, Lanterns, Buoys, Projects, Header],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
