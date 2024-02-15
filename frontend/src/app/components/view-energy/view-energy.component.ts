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

  chartsData: any[] = [];
  ngOnInit(): void {
    this.Energies_typeService.getEnergies_type().subscribe(data => {
      this.energies_type = data;
      this.chartSeries = this.energies_type.map((energy: any) => energy.Energie_totale);
      this.chartLabels = this.energies_type.map((energy: any) => energy.type);

      this.chartsData.push({
        series: this.chartSeries,
        labels: this.chartLabels,
        title: 'Energies'
      });
    });
}
onChartLoad(chart: any): void {
  const clickedPart = chart.target.parentElement.getAttribute("data:realIndex");
  const clickedElementDetails = this.energies_type[clickedPart];
  console.log(clickedElementDetails)

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
    //console.log(clickedEnergyType)
    // Met à jour les propriétés du composant avec les nouvelles données
    this.chartSeries = newChartData.map((energy: any) => energy.pourcentage);
    this.chartLabels = newChartData.map((energy: any) => energy.type);
    this.chartsData.push({
      series: this.chartSeries,
      labels: this.chartLabels,
      title: 'Moyen de production'
    });

  });
}


}