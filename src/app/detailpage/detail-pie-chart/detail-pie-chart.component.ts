import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { colorSets } from 'src/.utils/colorSets.util';

@Component({
  selector: 'app-detail-pie-chart',
  templateUrl: './detail-pie-chart.component.html',
  styleUrls: ['./detail-pie-chart.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DetailPieChartComponent implements OnInit {

  @Input() data;

  view = [];

  colorSets: any;
  colorScheme: any;
  animations = true;
  showLegend = true;
  legendTitle = 'Legend';
  legendPosition = 'below';
  showLabels = true;
  doughnut = false;
  arcWidth = 0.25;
  maxLabelLength = 20;

  constructor() {
    this.colorSets = colorSets;
    this.setColorScheme('cool');
   }

  ngOnInit() {
  }

  dblclick(event) {
    console.log('Double click', event);
  }

  select(data) {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  // activate(data) {
  //   console.log('Activate', JSON.parse(JSON.stringify(data)));
  // }

  // deactivate(data) {
  //   console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  // }

  setColorScheme(name) {
    this.colorScheme = this.colorSets.find(s => s.name === name);
  }

}
