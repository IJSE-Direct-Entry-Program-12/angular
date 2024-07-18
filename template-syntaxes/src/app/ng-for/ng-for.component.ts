import {Component} from '@angular/core';
import {CommonModule} from "@angular/common";
import {update} from "immutable";

@Component({
  selector: 'app-ng-for',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ul>
      <li *ngFor="let item of [1,2,3,4,5]; let i = index">
        List Item - {{ i }}
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
    <div class="p-2">
      <table class="table table-bordered table-hover">
        <thead>
        <tr>
          <th class="text-center">ID</th>
          <th>NAME</th>
          <th>ADDRESS</th>
          <th></th>
        </tr>
        </thead>
        <tbody>
        <tr *ngFor="let customer of customers;
                trackBy: trackCustomerFn">
          <td class="text-center">{{ customer.id }}</td>
          <td>{{ customer.name }}</td>
          <td>{{ customer.address }}</td>
          <td class="text-center">
            <i (click)="deleteCustomer(customer.id)"
               class="bi bi-trash"></i>
          </td>
        </tr>
        </tbody>
        <tfoot *ngIf="!customers.length">
        <tr>
          <td colspan="3" class="text-center">
            No Customer Records Found
          </td>
        </tr>
        </tfoot>
      </table>
    </div>
    <button (click)="updateItems()"
            class="btn btn-sm btn-danger">Update Items
    </button>
    <ul>
      <li *ngFor="let item of items" class="p-2">
        {{ item }}
      </li>
    </ul>
    <hr>
    <button (click)="updateItems2()"
            class="btn btn-sm btn-danger">Update Items
    </button>
    <ul>
      <li *ngFor="let item of items2; trackBy: trackItemFn"
          class="p-2">
        {{ item.value }} - {{item.name}}
      </li>
    </ul>
    <hr>
    <h2 class="text-center">Angular 18+</h2>
    @for(customer of customers; track customer.id){
        <li>{{customer.id}} - {{customer.name}}
          - {{customer.address}}</li>
    } @empty {
      No Customers Found
    }
  `,
  styles: `
    .bi-trash {
      font-size: 1.2rem;

      &:hover {
        color: red;
      }
    }
  `
})
export class NgForComponent {
  items =
    ['First', 'Second', 'Third', 'Fourth', 'Fifth'];
  items2 =
    [{value: 'First', name: 'Kasun'},
      {value: 'Second', name: 'Ruwan'},
      {value: 'Third', name: 'Upul'},
      {value: 'Fourth', name: 'Supun'},
      {value: 'Fifth', name: 'Sachin'}];

  updateItems() {
    this.items.unshift('New Item');
  }

  updateItems2() {
    this.items2 =
      [{value: 'First', name: 'Kasun'},
        {value: 'Second', name: 'Ruwan'},
        {value: 'Third', name: 'Upul'},
        {value: 'Fourth', name: 'Supun'},
        {value: 'Fifth', name: 'Sachin'}];
  }

  trackItemFn(index: number, item: any) {
    return item.value;
  }

  array1 = ['Kasun', 'Nuwan', 'Supun', 'Ruwan'];
  customers: { id: string, name: string, address: string }[] = [
    {id: 'C001', name: 'Kasun Sampath', address: 'Galle'},
    {id: 'C002', name: 'Nuwan Ramindu', address: 'Matara'},
    {id: 'C003', name: 'Sachin Thamlasha', address: 'Galle'},
    {id: 'C004', name: 'Kasun Vithange', address: 'Moratuwa'},
    {id: 'C005', name: 'Upul Tharanga', address: 'Panadura'}
  ];

  deleteCustomer(customerId: string) {
    this.customers = this.customers
      .filter(c => c.id !== customerId);
  }

  trackCustomerFn(index: number,
                  customer: { id: string, name: string, address: string }): string {
    return customer.id;
  }

}
