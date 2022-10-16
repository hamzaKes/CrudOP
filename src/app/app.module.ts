import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClientDashboardComponent } from './Client-dashboard/Client-dashboard.component';
import { ReactiveFormsModule} from "@angular/forms";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {CrudService} from "./crud.service";
import {HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ClientDashboardComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [CrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
