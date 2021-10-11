import { Component, Input, OnInit } from '@angular/core';
// import { multi } from './data';
// import * as shape from 'd3-shape';

@Component({
  selector: 'app-analytics-item',
  templateUrl: './analytics-item.component.html',
  styleUrls: ['./analytics-item.component.css'],
})
export class AnalyticsItemComponent implements OnInit {
  @Input() logo: string = '';
  @Input() name: string = '';
  @Input() searchNo: string = '';
  @Input() percent: string = '';
  @Input() sign: string = '';
  @Input() graph: string = '';
  logoFile: string = '';
  graphFile: string = '';
  signClass: string = '';

  constructor() {}

  ngOnInit() {
    this.logoFile = 'assets/analytics/analytics-icons/' + this.logo + '.png';
    this.graphFile = 'assets/analytics/analytics-graphs/' + this.graph + '.svg';
    if (this.sign == '+') {
      this.signClass = 'text-theme-success';
    }
    if (this.sign == '-') {
      this.signClass = 'text-theme-danger';
    }
  }
  // multi: any[] = [];
  // view: any[] = [300, 250];
  // curve = shape.curveBundle.beta(1);

  // // options
  // legend: boolean = true;
  // showLabels: boolean = true;
  // animations: boolean = true;
  // xAxis: boolean = true;
  // yAxis: boolean = true;
  // showYAxisLabel: boolean = true;
  // showXAxisLabel: boolean = true;
  // xAxisLabel: string = 'Date';
  // yAxisLabel: string = 'Interest over time';
  // timeline: boolean = true;

  // colorScheme = {
  //   domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5'],
  // };

  // constructor() {
  //   Object.assign(this, { multi });
  // }
}
