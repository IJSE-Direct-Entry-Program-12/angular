import {Component, effect, EventEmitter, Inject, Input, Output} from '@angular/core';
import {ValueService} from "../service/value.service";

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [],
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})
export class FirstComponent {
  value: number = 50;

  constructor(@Inject(ValueService)
              private valueService: ValueService) {
    effect(() => this.value = valueService.getValue());
  }

  updateValue(value: number){
    this.value = value;
    this.valueService.updateValue(value);
  }
}
