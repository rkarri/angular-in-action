import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HttpClientModule} from '@angular/common/http';
import {StocksService} from './services/stocks.service.ts';
import { SummaryComponent } from './summary/summary.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, SummaryComponent ],
  bootstrap:    [ AppComponent ],
  providers: [StocksService]
})
export class AppModule { }
