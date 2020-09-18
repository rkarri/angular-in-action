import { Component, Input } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-metric',
  templateUrl: './metric.component.html',
  styleUrls: ['./metric.component.css']
})
export class MetricComponent {
  @Input() title: string = '';
  @Input() desc: string = '';
  @Input('used') value: number = 0;
  @Input('available') max: number = 100;

  isDanger() {
    return this.value / this.max > 0.7;
  }

  constructor() { }

}