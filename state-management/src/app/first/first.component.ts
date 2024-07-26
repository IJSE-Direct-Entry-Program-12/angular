import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [],
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})
export class FirstComponent {
  @Input()
  value: number = 30;
  @Output()
  valueChange: EventEmitter<number> = new EventEmitter();

  updateValue(value: number){
    this.valueChange.emit(value);
  }
}
