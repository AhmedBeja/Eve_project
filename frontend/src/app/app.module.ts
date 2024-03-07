import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewEnergyComponent} from './components/view-energy/view-energy.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NgApexchartsModule } from 'ng-apexcharts';
import { SearchComponent } from './components/search/search.component';
import { ViewGlossary } from './components/glossary/glossary.component';
import { HomeComponent } from './components/home/home.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { ViewComparator } from './components/comparator/comparator.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewEnergyComponent,
    SearchComponent,
    ViewGlossary,
    HomeComponent,
    PieChartComponent,
    ViewComparator
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgApexchartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }