import {Component, effect, inject} from '@angular/core';
import {ThirdComponent} from "./thrid/third.component";
import {ValueService} from "../service/value.service";

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
  value = 40;
  valueService = inject(ValueService);
  myEffect = effect(() => this.value = this.valueService.getValue());

  constructor() {

  }
}
