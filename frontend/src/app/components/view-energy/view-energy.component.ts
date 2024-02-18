import { Component, OnInit } from '@angular/core';
import { ApexChart, ApexDataLabels, ApexNonAxisChartSeries, ApexTitleSubtitle } from 'ng-apexcharts';
import { EnergiesService, Energies_meanService, Energies_typeService } from 'src/app/energies.service';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './view-energy.component.html',
  styleUrls: ['./view-energy.component.scss']
})

export class ViewEnergyComponent implements OnInit {

  constructor(
    private EnergiesService: EnergiesService,
    private Energies_typeService: Energies_typeService,
    private Energies_meanService: Energies_meanService
  ) {}

  energies: any | undefined;
  energies_type: any | undefined;
  energies_mean: any | undefined;

  chartSeries: ApexNonAxisChartSeries = [];
  chartLabels: string[] = [];

  chartTitleEnergy: ApexTitleSubtitle = {
    text: 'Energies',
    align: 'center',
    style: {
      fontSize: "12"
    }
  };

  chartTitleProd: ApexTitleSubtitle = {
    text: 'Moyen de production',
    align: 'center',
    style: {
      fontSize: "12"
    }
  };
 
  chartsData: any[] = [];
  ngOnInit(): void {
    this.Energies_typeService.getEnergies_type().subscribe(data => {
      this.energies_type = data;
      this.chartSeries = this.energies_type.map((energy: any) => energy.Energie_totale);
      this.chartLabels = this.energies_type.map((energy: any) => energy.type);

      this.chartsData.push({
        series: this.chartSeries,
        labels: this.chartLabels,
        title: this.chartTitleEnergy
      });
    });
}
onChartLoad(chart: any): void {
  const clickedPart = chart.target.parentElement.getAttribute("data:realIndex");
  const clickedElementDetails = this.energies_type[clickedPart];

  if(clickedElementDetails.group == 'Type'){
    this.Energies_meanService.getEnergies_meanByType(clickedElementDetails.type).subscribe(filteredData => {
    this.loadEnergiesMean(clickedElementDetails.type);
  });
} if(clickedElementDetails.group == 'Moyen'){
  console.log('Fonctionne')
}
}

loadEnergiesMean(clickedEnergyType: any): void {
  
  const newChartData = {
    series: [],
    labels: [],
    title: 'Moyen de production'
  };
  this.Energies_meanService.getEnergies_meanByType(clickedEnergyType).subscribe(newChartData => {
    // Met à jour les propriétés du composant avec les nouvelles données
    this.chartSeries = newChartData.map((energy: any) => energy.pourcentage);
    this.chartLabels = newChartData.map((energy: any) => energy.type);
    this.chartsData.push({
      series: this.chartSeries,
      labels: this.chartLabels,
      title: this.chartTitleProd
    });
    console.log(this.chartsData)
  });
}


}