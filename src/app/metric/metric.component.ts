import { Component, Input } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-metric',
  templateUrl: './metric.component.html',
  styleUrls: ['./metric.component.css']
})
export class MetricComponent {

  private _value: number = 0;
  private _max: number = 100;

  @Input('used')
  set value(value: number) {
     if(isNaN(value)){
       value = 0;
     }
     this._value = value;
  }

  get max() : number {
    return this._max;
  }

  @Input('available')
  set max(max: number) {
     if(isNaN(max)){
       max = 100;
     }
     this._max = max;
  }

  get value() : number {
    return this._value;
  }

  isDanger() {
    return this.value / this.max > 0.7;
  }

}