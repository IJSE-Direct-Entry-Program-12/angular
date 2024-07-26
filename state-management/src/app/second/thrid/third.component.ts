import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-thrid',
  standalone: true,
  imports: [],
  templateUrl: './third.component.html',
  styleUrl: './third.component.css'
})
export class ThirdComponent {
  @Input()
  value = 50;
  @Output()
  valueChange = new EventEmitter<number>();

  updateValue(value: number){
    this.valueChange.emit(value);
  }
}
