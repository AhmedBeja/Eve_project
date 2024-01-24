import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewEnergyComponent} from './components/view-energy/view-energy.component';

const routes: Routes = [
  { path: '', component: ViewEnergyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }