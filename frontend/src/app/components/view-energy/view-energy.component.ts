import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EnergiesService } from '../../energies.service';

@Component({
  selector: 'app-view-energy',
  templateUrl: './view-energy.component.html',
  styleUrl: './view-energy.component.css'
})
export class ViewEnergyComponent {
  energies: any | undefined;

  constructor(private EnergiesService: EnergiesService) { 
   
  }

  ngOnInit(): void {
    this.EnergiesService.getEnergies().subscribe(data => {
      this.energies = data;
      console.log(data)
    });
  }
}
