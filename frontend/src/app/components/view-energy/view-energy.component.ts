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
  chartDetails: ApexChart = {
    type: 'pie',
    toolbar: {
      show: true
    }
  };
  chartTitle: ApexTitleSubtitle = {
    text: 'Energies',
    align: 'center'
  };
  chartDataLabels: ApexDataLabels = {
    enabled: true
  };
  initialChartTitle: string = 'Energies';
  ngOnInit(): void {
    this.Energies_typeService.getEnergies_type().subscribe(data => {
      this.energies_type = data;
      // Map the data for the chart series
      this.chartSeries = this.energies_type.map((energy: any) => energy.Energie_totale);
      
      // Map the labels
      this.chartLabels = this.energies_type.map((energy: any) => energy.type);
  });
}
onChartLoad(chart: any): void {
  const clickedPart = chart.target.parentElement.getAttribute("data:realIndex");
  const clickedEnergyDetails = this.energies_type[clickedPart];
  this.Energies_meanService.getEnergies_meanByType(clickedEnergyDetails.type).subscribe(filteredData => {
    for (let i = 0; i < filteredData.length; i++) {
      const element = filteredData[i];
      this.loadEnergiesMean(element.family);
    }
  });
}

loadEnergiesMean(clickedEnergyType: any): void {
  this.initialChartTitle = 'Moyen de production';
  this.Energies_meanService.getEnergies_meanByType(clickedEnergyType).subscribe(newChartData => {

    // Met à jour les propriétés du composant avec les nouvelles données
    this.chartSeries = newChartData.map((energy: any) => energy.pourcentage);
    this.chartLabels = newChartData.map((energy: any) => energy.type);
    this.chartTitle.text = this.initialChartTitle;
  });
}

}