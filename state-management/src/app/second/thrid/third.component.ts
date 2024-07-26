import {Component, effect, EventEmitter, inject, Input, Output} from '@angular/core';
import {ValueService} from "../../service/value.service";

@Component({
  selector: 'app-thrid',
  standalone: true,
  imports: [],
  templateUrl: './third.component.html',
  styleUrl: './third.component.css'
})
export class ThirdComponent {
  value = 20;
  valueService = inject(ValueService);

  updateValue(value: number){
    this.value = value;
    this.valueService.updateValue(value);
  }

  constructor() {
    effect(() => this.value = this.valueService.getValue());
  }
}
