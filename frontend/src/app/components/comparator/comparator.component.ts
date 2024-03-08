import { Component, ViewChild, ElementRef  } from '@angular/core';
import { EnergiesService } from 'src/app/energies.service';

@Component({
    selector: 'app-pie-chart',
    templateUrl: './comparator.component.html',
    styleUrls: ['./comparator.component.scss']
  })

  export class ViewComparator {
    @ViewChild('energy1Select') energy1Select!: ElementRef;
    @ViewChild('energy2Select') energy2Select!: ElementRef;
    result: string = '';
    energies_list: any | undefined;
    energy1Details: any | undefined;
    energy2Details: any | undefined;

    constructor(
      private EnergiesService: EnergiesService
    ) {}

    ngOnInit(): void {
      this.EnergiesService.getEnergies().subscribe((data: any[]) => {
        this.energies_list = data;
      });
  }

    compare(): void {
      const energy1Value = this.energy1Select.nativeElement.value;
      const energy2Value = this.energy2Select.nativeElement.value;
      this.result = `Vous avez sélectionné : ${energy1Value} et ${energy2Value}`;
      
      // Récupérer les détails de l'énergie 
  this.energy1Details = this.energies_list.find((energy: any) => energy.name === energy1Value);
  this.energy2Details = this.energies_list.find((energy: any) => energy.name === energy2Value);

  if (this.energy1Details && this.energy2Details) {

    if (this.energy1Details.lcoe < this.energy2Details.lcoe) {
      this.result = `${this.energy1Details.name} a un LCOE inférieur à ${this.energy2Details.name} (${this.energy1Details.lcoe}<${this.energy2Details.lcoe})`;
    } else if (this.energy1Details.lcoet > this.energy2Details.lcoe) {
      this.result = `${this.energy1Details.name} a un LCOE supérieur à ${this.energy2Details.name} (${this.energy1Details.lcoe}>${this.energy2Details.lcoe})`;
    } else {
      this.result = `${this.energy1Details.name} et ${this.energy2Details.name} ont le même LCOE (${this.energy1Details.lcoe})`;
    }
  } else {
    this.result = 'Impossible de comparer les énergies sélectionnées.';
  }
  console.log(this.energy1Details)
  }
  }