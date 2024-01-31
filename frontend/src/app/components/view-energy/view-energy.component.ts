import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EnergiesService,Energies_typeService, Energies_meanService} from '../../energies.service';

@Component({
  selector: 'app-view-energy',
  templateUrl: './view-energy.component.html',
  styleUrl: './view-energy.component.css'
})
export class ViewEnergyComponent {
  energies: any | undefined;
  energies_type: any | undefined;
  energies_mean: any | undefined;
  

  constructor(
    private EnergiesService: EnergiesService,
    private Energies_typeService: Energies_typeService,
    private Energies_meanService: Energies_meanService )
    { 
   
  }

  ngOnInit(){
    this.EnergiesService.getEnergies().subscribe(data => {
      this.energies = data;
      console.log(data)
    });
    this.Energies_meanService.getEnergies_mean().subscribe(data => {
      this.energies_mean = data;
      console.log(data)
    });
    this.Energies_typeService.getEnergies_type().subscribe(data => {
      this.energies_type = data;
      console.log(data)
    });
  }
}
