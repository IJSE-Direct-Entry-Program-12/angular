import {Component, Input} from '@angular/core';
import {first} from "rxjs";

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [],
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})
export class FirstComponent {
  @Input("first")
  firstInput: string = "";
  @Input("second")
  secondInput: string = "";
}
