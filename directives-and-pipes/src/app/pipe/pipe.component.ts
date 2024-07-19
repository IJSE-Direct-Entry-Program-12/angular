import {Component, ElementRef, ViewChild} from '@angular/core';
import {
  CurrencyPipe,
  DatePipe,
  DecimalPipe,
  LowerCasePipe,
  PercentPipe,
  TitleCasePipe,
  UpperCasePipe
} from "@angular/common";

@Component({
  selector: 'app-pipe',
  standalone: true,
  imports: [
    UpperCasePipe,
    LowerCasePipe,
    TitleCasePipe,
    DatePipe,
    CurrencyPipe,
    DecimalPipe,
    PercentPipe
  ],
  template: `
    @let myVariable = 10;
    @let myVariable2 = 20;
    <p #pId>
      {{ 'pipe works!' | uppercase | lowercase | titlecase }}
    </p>
    <h1>Today: {{ today | date: 'yyyy-MMMM-dd hh:mm:ss' | uppercase }}</h1>
    <h1>Total: {{ 1257.2 | currency: 'USD' : 'code' }}</h1>
    <h1>Number: {{ myNumber | number: '1.2-2' }}</h1>
    <h1>Customer ID: C{{ customerId | number: '3.0' }}</h1>
    <h1>Percentage: {{ value | percent: '1.2-2' }}</h1>
    Enter a number between 0 - 10 <br>
    <input #txt type="text">
    <button (click)="txt.focus()">Focus</button> <br>
    <button (click)="validate()">Validate</button>
    <h2>Value: {{ myVariable + myVariable2 }}</h2>
  `,
  styles: ``
})
export class PipeComponent {
  @ViewChild("txt")
  txtElmRef!: ElementRef<HTMLInputElement>;

  validate() {
    const value = +this.txtElmRef.nativeElement.value;
    if (value >= 0 && value <= 10) {
      alert("Validated");
    } else {
      alert("Invalidated");
      this.txtElmRef.nativeElement.focus();
      this.txtElmRef.nativeElement.select();
    }
  }

  today = new Date();
  myNumber = 122222.77888;
  customerId = 10;
  value = 0.858888;
}
