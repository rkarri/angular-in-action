import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HttpClientModule} from '@angular/common/http';
import {StocksService} from './services/stocks.service';
import { SummaryComponent } from './summary/summary.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageComponent } from './manage/manage.component';
import { AppRoutes } from './app.routes';
import { MetricComponent } from './metric/metric.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { CommonModule } from '@angular/common';

@NgModule({
  imports:      [ BrowserModule, CommonModule, FormsModule, HttpClientModule, AppRoutes, NgbModule.forRoot() ],
  declarations: [ AppComponent, HelloComponent, SummaryComponent, DashboardComponent, ManageComponent, MetricComponent ],
  bootstrap:    [ AppComponent ],
  providers: [StocksService]
})
export class AppModule { }
