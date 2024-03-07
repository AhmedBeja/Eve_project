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

    constructor(
      private EnergiesService: EnergiesService
    ) {}

    energies_list: any | undefined;

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
  const energy1Details = this.energies_list.find((energy: any) => energy.name === energy1Value);
  const energy2Details = this.energies_list.find((energy: any) => energy.name === energy2Value);

  if (energy1Details && energy2Details) {
    const energy1Cost = energy1Details.lcoe;
    const energy2Cost = energy2Details.lcoe;

    if (energy1Cost < energy2Cost) {
      this.result = `${energy1Details.name} a un LCOE inférieur à ${energy2Details.name} (${energy1Details.lcoe}<${energy2Details.lcoe})`;
    } else if (energy1Cost > energy2Cost) {
      this.result = `${energy1Details.name} a un LCOE supérieur à ${energy2Details.name} (${energy1Details.lcoe}>${energy2Details.lcoe})`;
    } else {
      this.result = `${energy1Details.name} et ${energy2Details.name} ont le même LCOE (${energy1Details.lcoe})`;
    }
  } else {
    this.result = 'Impossible de comparer les énergies sélectionnées.';
  }
  console.log(energy1Value)
}

  }