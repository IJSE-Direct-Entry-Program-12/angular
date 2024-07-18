import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { UpdateCustomerComponent } from '../update-customer/update-customer.component';



@NgModule({
  declarations: [
    AddCustomerComponent,
    UpdateCustomerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CustomerModule { }
