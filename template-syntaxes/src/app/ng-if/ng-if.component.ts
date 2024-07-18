import {Component} from '@angular/core';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-ng-if',
  standalone: true,
  imports: [
    NgIf
  ],
  template: `
    <div class="container text-center">
      <button (click)="flag = !flag"
              class="btn btn-primary btn-sm">Click Me
      </button>
      <p class="mt-2" *ngIf="flag">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, aliquid dignissimos doloribus eaque esse eveniet
        fugiat inventore laborum libero magnam neque numquam odio, pariatur sint sit tempora temporibus tenetur
        voluptates!
      </p>
    </div>
    <div class="container text-center">
      <button (click)="flag2 = !flag2"
              class="btn btn-primary btn-sm">Click Me
      </button>
      <div class="mt-2" *ngIf="flag2;else abc">Flag is true</div>
      <ng-template #abc>
        <div class="mt-2">Flag is false</div>
      </ng-template>
    </div>
    <hr>
    <h2 class="text-center">Angular 18+</h2>
    <div class="container text-center">
      <button (click)="flag3 = !flag3"
              class="btn btn-primary btn-sm">Click Me
      </button>
      @if (flag3) {
        <div class="mt-2">Flag is true</div>
        <div class="mt-2">Flag is true</div>
        <div class="mt-2">Flag is true</div>
      } @else {
        <div class="mt-2">Flag is false</div>
        <div class="mt-2">Flag is false</div>
        <div class="mt-2">Flag is false</div>
      }
    </div>
  `,
  styles: ``
})
export class NgIfComponent {
  flag = true;
  flag2 = true;
  flag3 = true;
}
