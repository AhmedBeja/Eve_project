import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewEnergyComponent} from './components/view-energy/view-energy.component';
import { ViewGlossary } from './components/glossary/glossary.component';
import { ViewComparator } from './components/comparator/comparator.component';

const routes: Routes = [
  { path: '', component: ViewEnergyComponent },
  { path: 'glossaire', component: ViewGlossary },
  { path: 'comparateur', component: ViewComparator}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }