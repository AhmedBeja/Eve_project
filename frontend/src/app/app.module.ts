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

@NgModule({
  declarations: [
    AppComponent,
    ViewEnergyComponent,
    SearchComponent,
    ViewGlossary
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