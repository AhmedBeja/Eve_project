import { Component, OnInit } from '@angular/core';
import { ApexChart, ApexDataLabels, ApexNonAxisChartSeries, ApexOptions, ApexTitleSubtitle } from 'ng-apexcharts';
import { EnergiesService, Energies_meanService, Energies_typeService } from 'src/app/energies.service';
import { Energy_type,Energy_mean } from 'src/app/Energies';

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
  energies_details : any | undefined;
  energies_type: Energy_type[];
  energies_mean: Energy_mean[];

  displayTable: boolean = false;

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

  chartTitleProdEnergy: ApexTitleSubtitle = {
    text: 'Répartition de production',
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
        title: this.chartTitleEnergy,
      });
    });
    this.Energies_meanService.getEnergies_mean().subscribe(data => {
      this.energies_mean = data;
    });
}
onChartLoad(chart: any): void {
  const clickedPartIndex = chart.target.parentElement.getAttribute("data:realIndex");
  const clickedPart= chart.target.parentElement.getAttribute("seriesName");
  
  if(this.energies_type && this.energies_type.some(item => item.id === clickedPart)){
    const clickedElementDetails = this.energies_type[clickedPartIndex]
    this.Energies_meanService.getEnergies_meanByType(clickedElementDetails.type).subscribe(filteredData => {
    this.loadEnergiesMean(clickedElementDetails.type);
  });
} if(this.energies_mean && this.energies_mean.some(item => item.type === clickedPart)){
  const Family= this.energies_mean.find(item => item.type === clickedPart)?.family;
  const filtered_energies= this.energies_mean.filter(item => item.family === Family)
  const clickedElementDetails = filtered_energies[clickedPartIndex]
  this.loadEnergyMeanDetails(clickedElementDetails.type)
}
}

loadEnergiesMean(clickedEnergyType: any): void {
  
  const newChartData = {
    series: [],
    labels: [],
    title: 'Moyen de production'
  };
  this.Energies_meanService.getEnergies_meanByType(clickedEnergyType).subscribe(newChartData => {
    this.chartSeries = newChartData.map((energy: any) => energy.pourcentage);
    this.chartLabels = newChartData.map((energy: any) => energy.type);
    this.chartsData.push({
      series: this.chartSeries,
      labels: this.chartLabels,
      title: this.chartTitleProd,
    });
  });
}
loadEnergyMeanDetails(clickedPart: string): void {
  const newChartData = {
    series: [],
    labels: [],
    title: 'Répartition de la production'
  };
  this.EnergiesService.getEnergies_Details(clickedPart).subscribe(data => {

    this.energies_details = data;
    this.displayTable = true; 
  });
  this.EnergiesService.getEnergies_Details(clickedPart).subscribe(newChartData => {
    this.chartSeries = [this.energies_details[0].electricite,this.energies_details[0].chaleur,this.energies_details[0].combustible];
    this.chartLabels = ['Electricité','Chaleur','Combustible'];
    this.chartsData.push({
      series: this.chartSeries,
      labels: this.chartLabels,
      title: this.chartTitleProdEnergy,
    });
  });
}

hideTable(): void {
  this.displayTable = false;
}

}