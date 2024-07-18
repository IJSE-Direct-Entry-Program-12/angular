import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-ng-for',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ul>
      <li *ngFor="let item of [1,2,3,4,5]; let i = index">
        List Item - {{i}}
      </li>
    </ul>
    <ul>
      <li *ngFor="let name of array1;
      let isOdd = odd; even as isEven;
      let isFirst = first; let isLast = last;">
        {{ name }}
        <span *ngIf="isFirst" class="text-danger">FIRST</span>
        <span *ngIf="isLast" class="text-danger">LAST</span>
        <span *ngIf="isOdd">- ODD</span>
        <span *ngIf="isEven">- EVEN</span>
      </li>
    </ul>
  `,
  styles: ``
})
export class NgForComponent {
  array1 = ['Kasun', 'Nuwan', 'Supun', 'Ruwan'];
}
