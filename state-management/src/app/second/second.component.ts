import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ThirdComponent} from "./thrid/third.component";

@Component({
  selector: 'app-second',
  standalone: true,
  imports: [
    ThirdComponent
  ],
  templateUrl: './second.component.html',
  styleUrl: './second.component.css'
})
export class SecondComponent {
    @Input()
    value = 40;
    @Output()
    valueChange = new EventEmitter<number>();

    updateValue(value: number){
      this.valueChange.emit(value);
    }
}
