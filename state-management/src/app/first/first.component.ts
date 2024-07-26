import {Component, EventEmitter, Inject, Input, Output} from '@angular/core';
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
    valueService.getValue().subscribe(
      value => this.value = value);
  }

  updateValue(value: number){
    this.value = value;
    this.valueService.updateValue(value);
  }
}
