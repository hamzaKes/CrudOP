import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { KundenDashboardComponent } from './kunden-dashboard/kunden-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    KundenDashboardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
