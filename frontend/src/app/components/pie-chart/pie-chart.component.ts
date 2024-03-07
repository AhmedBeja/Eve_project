import { Component, Input, OnInit, ViewChild } from "@angular/core";
import { ChartComponent } from "ng-apexcharts";

import {
  ApexNonAxisChartSeries,
  ApexChart,
  ApexTitleSubtitle,
  ApexDataLabels
} from "ng-apexcharts";

@Component({
  selector: "pie-chart",
  templateUrl: "./pie-chart.component.html",
  styleUrls: ["./pie-chart.component.css"]
})
export class PieChartComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent;
  @Input() series : ApexNonAxisChartSeries;
  @Input() labels: string[];
  @Input() title: ApexTitleSubtitle;
  @Input() onClick : Function;

  chartDetails: ApexChart = {
    type: 'donut',
    toolbar: {
      show: true
    },
    
  };

  dataLabels: ApexDataLabels = {
    enabled: true
  };

  constructor() {}
  ngOnInit(): void {}
}
