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

  ngOnInit(): void {
    this.Energies_typeService.getEnergies_type().subscribe(data => {
      this.energies_type = data;

      // Map the data for the chart series
      this.chartSeries = this.energies_type.map((energy: any) => energy.pourcentage);
      
      // Map the labels
      this.chartLabels = this.energies_type.map((energy: any) => energy.type);
  });
}

}