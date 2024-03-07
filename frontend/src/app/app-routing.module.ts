import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewEnergyComponent} from './components/view-energy/view-energy.component';
import { ViewGlossary } from './components/glossary/glossary.component';
import { ViewComparator } from './components/comparator/comparator.component';
import { HomeComponent } from './components/home/home.component';
import { SankeyComponent } from './components/sankey/sankey.component';

const routes: Routes = [
  { path: '', component: ViewEnergyComponent },
  { path: 'home', component: HomeComponent },
  { path: 'glossaire', component: ViewGlossary },
  { path: 'comparateur', component: ViewComparator},
  { path: 'sankey', component: SankeyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }