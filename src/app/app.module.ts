import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './components/app.component';
import { NavbarComponent } from './components/navbar.component';
import { SecurityFinderComponent } from './components/security-finder.component';
import { ChartComponent } from './components/chart.component';
import {ListViewComponent} from './components/list-view.component';
//import {FilterPipe} from './components/pipes';

import { AuthService } from './services/auth.service';
import { SecuritiesService } from './services/securities.service';
import { SecuritySearchService } from './services/security-search.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SecurityFinderComponent,
    ChartComponent,
    ListViewComponent,
    //FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ChartsModule
  ],
  providers: [
    AuthService,
    SecuritiesService,
    SecuritySearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
